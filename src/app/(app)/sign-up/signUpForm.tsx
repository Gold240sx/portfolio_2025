'use client'
import React, { ReactElement, useTransition, useActionState, useRef } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { X } from 'lucide-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect, useRouter } from 'next/navigation'
import { Input } from '@/components/shadcn/input'
import { Button } from '@/components/shadcn/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/form'
import { onSubmitAction, FormState } from '../sign-in/actions/formSubmit'
import { schema } from './schema'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/shadcn/toast'

type FormData = z.infer<typeof schema>

export default function SignUpForm(): ReactElement {
  const [state, formAction] = useActionState(onSubmitAction, {
    status: 'error' as FormState['status'],
    message: '',
  })
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const isUnderDevelopment = process.env.NODE_ENV === 'development'

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: (isUnderDevelopment ? 'Tommy' : '') as string,
      lastName: (isUnderDevelopment ? 'password' : '') as string,
      email: (isUnderDevelopment ? 'thisEmilServer@gmil.com' : '') as string,
      password: (isUnderDevelopment ? 'password' : '') as string,
      ...(state?.fields ?? {}), // if we have fields then they should override the default values
    },
  })

  const formRef = useRef<HTMLFormElement>(null)

  const {
    reset,
    formState: { isSubmitting, isLoading, isValidating, isValid, isSubmitSuccessful, isDirty },
  } = form

  return (
    <Form {...form}>
      <form
        className="space-y-8 max-w-xl"
        ref={formRef}
        action={formAction}
        onSubmit={form.handleSubmit(() => {
          formRef.current?.submit()
          if (state.issues || !isValid) {
            return
          } else {
            toast({
              title: 'Success!',
              description: state.message,
              code: form.getValues(),
            })
            // reset()
            redirect('/dashboard')
          }
        })}
      >
        {' '}
        <div className="space-y-[20px] flex flex-col">
          <h2 className="text-3xl font-bold">Create a new Account!</h2>
          <FormDescription className="text-xl mb-4">Get started today!</FormDescription>
          <div className="flex w-full gap-2 flex-grow">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }: { field: ControllerRenderProps<FormData, 'firstName'> }) => (
                <FormItem className="w-1/2">
                  <FormLabel htmlFor={field.name}>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" id={field.name} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }: { field: ControllerRenderProps<FormData, 'lastName'> }) => (
                <FormItem className="w-1/2">
                  <FormLabel htmlFor={field.name}>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" id={field.name} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: ControllerRenderProps<FormData, 'email'> }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="text" id={field.name} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }: { field: ControllerRenderProps<FormData, 'password'> }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" id={field.name} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {state?.message !== '' && !state.issues && (
          <div
            className={`${
              state.status === 'success' ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'
            } p-4 rounded`}
          >
            {state.message}
          </div>
        )}
        {state?.issues && (
          <div className="bg-red-100 text-red-900 p-4 rounded">
            <ul>
              {state.issues.map((issue) => (
                <div className="flex gap-1" key="issue">
                  <X />
                  <li key={issue}>{issue}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
        {isSubmitting && <li>Submitting...</li>}
        {isLoading && <li>Loading...</li>}
        {isValidating && <li>Validating...</li>}
        <button
          id="get-started-button"
          type="submit"
          className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting || isLoading || isValidating}
          // disabled={isPending}
        >
          {/* {isSubmitting || isLoading || isValidating ? 'Submitting...' : 'Get Started'} */}
          {isPending ? 'Submitting...' : 'Get Started'}
        </button>
      </form>
    </Form>
  )
}
