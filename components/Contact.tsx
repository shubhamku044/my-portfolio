import styles from '../styles/components/contact.module.scss';
import { useForm } from 'react-hook-form';
import { useEffect, useState, createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import type { NextPage } from 'next';

type FormValues = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

const Contact: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [sending, setSending] = useState<boolean>(false);
  const [mailReceived, setMailReceived] = useState<boolean>(false);

  const recaptchaRef = createRef();

  const onSubmit = async (data) => {
    setSending(true);
    try {
      recaptchaRef.current.execute();
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('success');
        setMailReceived(true);
        reset();
      }
    } catch (err) {
      console.log(`ERROR: `, err);
    }

    setSending(false);
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        alert('Email registered successfully');
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || 'Something went wrong');
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
      setEmail('');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMailReceived(false);
    }, 10000);
  }, [sending]);

  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.container__heading}>Contact</h2>
      <div className={styles.container__box}>
        <p className={styles['container__box-para']}>
          If you'd like to chat about a project, just have a question or just
          want to say hi, Please fill in the form below. I'll try my best to get
          back to you!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className={styles['container__box-form']}
        >
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.RECAPTCHA_SITE_KEY}
            size="invisible"
            onChange={onReCAPTCHAChange}
          />
          {mailReceived && (
            <div className={styles['container__box-success']}>
              Message received! Thanks!
            </div>
          )}
          <div className={styles['container__box-form-container-1']}>
            <div className={styles['container__box-form-container']}>
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <input
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Please enter you name',
                  },
                  minLength: 3,
                })}
                type="text"
                name="name"
                id="name"
                autoComplete="off"
              />
              {errors?.name?.message && <span>{errors?.name?.message}</span>}
            </div>
            <div className={styles['container__box-form-container']}>
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Please enter your email',
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    message: 'Enter a valid email address.',
                  },
                })}
                type="text"
                name="email"
                id="email"
                autoComplete="off"
              />
              {errors?.email?.message && <span>{errors?.email?.message}</span>}
            </div>
          </div>
          <div className={styles['container__box-form-container']}>
            <label htmlFor="subject">
              Subject<span>*</span>
            </label>
            <input
              {...register('subject', {
                required: {
                  value: true,
                  message: 'Please enter the subject',
                },
              })}
              type="text"
              name="subject"
              id="subject"
              autoComplete="off"
            />
            {errors?.subject?.message && (
              <span>{errors?.subject?.message}</span>
            )}
          </div>
          <div className={styles['container__box-form-container']}>
            <label htmlFor="message">
              Message<span>*</span>
            </label>
            <textarea
              {...register('message', {
                required: {
                  value: true,
                  message: 'Please type your message',
                },
                maxLength: {
                  value: 1200,
                  message: "Your message can't be more than 1200 characters.",
                },
                minLength: {
                  value: 50,
                  message: "Your message can't be less than 50 characters.",
                },
              })}
              name="message"
              id="message"
              rows={8}
              autoComplete="off"
              style={{
                minHeight: '14rem',
              }}
            ></textarea>
            {errors?.message?.message && (
              <span>{errors?.message?.message}</span>
            )}
          </div>
          <button
            type="submit"
            style={
              sending
                ? {
                    cursor: 'not-allowed',
                    // @ts-ignore
                    backgroundOpacity: '0.7',
                  }
                : {}
            }
            disabled={sending && true}
            // @ts-ignore
            onSubmit={handleSubmit}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
