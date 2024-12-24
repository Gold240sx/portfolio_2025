'use client'
import React, { ReactElement, useActionState, useRef, useTransition } from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { X } from 'lucide-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
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
import { onSubmitAction } from '../sign-in/actions/formSubmit'
import { schema } from './schema'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/shadcn/toast'

type FormData = z.infer<typeof schema>

export default function SignInForm(): ReactElement {
  const [state, formAction] = useActionState(onSubmitAction, {
    status: 'success' as 'success' | 'error',
    message: '',
  })
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const router = useRouter()
  const isUnderDevelopment = process.env.NODE_ENV === 'development'

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: (isUnderDevelopment ? 'password' : '') as string,
      ...(state?.fields ?? {}), // if we have fields then they should override the default values
    },
  })

  const formRef = useRef<HTMLFormElement>(null)

  const {
    formState: { isSubmitting, isLoading, isValidating, isSubmitSuccessful },
  } = form

  return (
    <Form {...form}>
      <form
        className="space-y-4 max-w-xl"
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault()
          form.handleSubmit(() => {
            startTransition(() => {
              if (formRef.current) {
                formAction(new FormData(formRef.current))
              }
            })
            // if (state.status === 'success' && state.issues?.length === 0 && isSubmitSuccessful) {
            //   toast({
            //     title: 'You submitted the following values:',
            //     description: 'Great work!',
            //     code: form.getValues(),
            //     action: (
            //       <ToastAction
            //         altText="Go to dashboard"
            //         onClick={() => {
            //           router.push('/dashboard')
            //         }}
            //       >
            //         Go to dashboard
            //       </ToastAction>
            //     ),
            //   })
            //   router.push('/dashboard')
            // }
          })(evt)
        }}
      >
        <h2 className="text-2xl font-bold">Sign In</h2>
        <FormDescription>Sign in to your account using your email and password.</FormDescription>
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
        {state?.message !== '' && !state.issues && (
          <div
            className={`${
              state.status === 'success' ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'
            } p-4 rounded`}
          >
            Messages:
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
        <ul>
          {/* // check what is preventing the button from upating back from being disabled */}
          {isSubmitting && <li>Submitting...</li>}
          {isLoading && <li>Loading...</li>}
          {isValidating && <li>Validating...</li>}
          {isSubmitSuccessful && <li>Submit Successful</li>}
        </ul>
        <button
          id="get-started-button"
          type="submit"
          className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
          // disabled={isSubmitting || isLoading || isValidating}
          disabled={isPending}
        >
          {/* {isSubmitting || isLoading || isValidating ? 'Submitting...' : 'Get Started'} */}
          {isPending ? 'Submitting...' : 'Get Started'}
        </button>
      </form>
    </Form>
  )
}
