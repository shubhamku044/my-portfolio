import styles from '../styles/components/contact.module.scss';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import ReCAPTCHA from 'react-google-recaptcha';

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
  const reRef = useRef<ReCAPTCHA>();

  const [sending, setSending] = useState<boolean>(false);
  const [mailReceived, setMailReceived] = useState<boolean>(false);

  const onSubmit = async (data) => {
    setSending(true);
    try {
      const token = await reRef.current.executeAsync();
      reRef.current.reset();

      const response = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify({ ...data, token }),
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
          {mailReceived && (
            <div className={styles['container__box-success']}>
              Message received! Thanks!
            </div>
          )}
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            size="invisible"
            ref={reRef}
          />
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