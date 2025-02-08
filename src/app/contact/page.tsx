"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SocialHandleCard } from "@/components";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

interface ISocialHandles {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

const socialHandles: ISocialHandles[] = [
  {
    id: 0,
    title: "@shubhamku044",
    icon: (
      <AiOutlineTwitter className="h-5 w-5 text-gray-400 dark:text-gray-300" />
    ),
    link: "https://twitter.com/shubhamku044",
  },
  {
    id: 1,
    title: "@shubhamku044",
    icon: <SiHashnode className="h-5 w-5 text-gray-400 dark:text-gray-300" />,
    link: "https://shubhamku044.hashnode.dev/",
  },
  /* {
    id: 2,
    title: 'Shubham Kumar',
    icon: <FaDiscord className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
    link: 'https://discord.com/users/70800000000000000',
  }, */
  {
    id: 3,
    title: "Shubham Kumar",
    icon: <FaLinkedin className="h-5 w-5 text-gray-400 dark:text-gray-300" />,
    link: "https://www.linkedin.com/in/shubhamku044/",
  },
  // {
  //   id: 5,
  //   title: '@shubhamku044',
  //   icon: <FaInstagram className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
  //   link: 'https://www.instagram.com/shubhamku044/',
  // },
  {
    id: 6,
    title: "shubhamku044@gmail.com",
    icon: <MdEmail className="h-5 w-5 text-gray-400 dark:text-gray-300" />,
    link: "mailto:shubhamku044@gmail.com",
  },
];

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required").max(50),
  email: z.string().email(),
  message: z.string().min(100),
});

type ContactSchemaType = z.infer<typeof ContactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactSchemaType> = async (
    data: ContactSchemaType
  ) => {
    try {
      console.log("getting the data", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold lg:text-4xl">Let&apos;s chat 💬</h1>
        <p className="text-gray-700 dark:text-gray-300 lg:text-lg">
          I&apos;m always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
      </div>
      <div className="flex flex-col-reverse items-start gap-2 md:flex-row">
        <div className="flex-1 rounded border border-gray-400 bg-gray-200/60 dark:border-gray-800 dark:bg-gray-900/60">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 p-4">
              <div className="flex w-full items-center gap-4">
                <div className="relative flex-1 space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded border border-gray-800 p-2 text-sm outline-none dark:border-gray-600 dark:bg-gray-900"
                  />
                  {errors.name && (
                    <span className="absolute -bottom-4 left-0 text-xs text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="relative flex-1 space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full rounded border border-gray-800 p-2 text-sm outline-none dark:border-gray-600 dark:bg-gray-900"
                  />
                  {errors.email && (
                    <span className="absolute -bottom-4 left-0 text-xs text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 100,
                      message: "Message should be at least 100 characters",
                    },
                  })}
                  rows={4}
                  className="w-full rounded border border-gray-800 p-2 text-sm outline-none dark:border-gray-600 dark:bg-gray-900"
                />
                {errors.message && (
                  <span className="text-xs text-red-400">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
                disabled={isSubmitting}
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1">
          {socialHandles.map((socialHandle) => (
            <SocialHandleCard
              key={socialHandle.id}
              title={socialHandle.title}
              link={socialHandle.link}
              icon={socialHandle.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
