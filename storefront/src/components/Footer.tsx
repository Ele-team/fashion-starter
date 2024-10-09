"use client"

// External components
import { z } from "zod"

// Components
import { Button, Layout, LayoutColumn, Link } from "./"
import { Form } from "./Form"
import { Input } from "./Forms"

export const Footer = () => {
  const emailSubscriptionSchema = z.object({
    email: z.string().email().nullable(),
  })

  return (
    <div className="bg-grayscale-50 py-8 md:py-20">
      <Layout>
        <LayoutColumn className="col-span-13">
          <div className="flex flex-col justify-between md:gap-20 md:items-center">
            <div className="max-w-35 md:flex-1 order-2 max-md:mb-9">
              <h1 className="text-lg md:text-xl mb-2 md:mb-6 leading-[0.9]">
                Sofa Society Co.
              </h1>
              <p className="text-xs">&copy; 2024, Sofa Society</p>
            </div>
            <div className="flex gap-18 max-md:text-xs flex-1 order-3 justify-center">
              <ul className="flex flex-col gap-6 md:gap-4">
                <li>
                  <Link href="/">FAQ</Link>
                </li>
                <li>
                  <Link href="/">Help</Link>
                </li>
                <li>
                  <Link href="/">Delivery</Link>
                </li>
                <li>
                  <Link href="/">Returns</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-6 md:gap-4">
                <li>
                  <Link href="/">Instagram</Link>
                </li>
                <li>
                  <Link href="/">TikTok</Link>
                </li>
                <li>
                  <Link href="/">Pinterest</Link>
                </li>
                <li>
                  <Link href="/">Facebook</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-6 md:gap-4">
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/">Terms of Use</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-96 order-1 max-md:mb-16">
              <h2 className="text-md md:text-lg mb-2 md:mb-4">
                Join our newsletter
              </h2>
              <p className="mb-4">
                We will also send you our discount coupons!
              </p>
              <Form schema={emailSubscriptionSchema}>
                <div className="flex gap-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    wrapperClassName="flex-1"
                    className="mb-4 rounded-xs h-9 text-xs"
                  />
                  <Button className="h-9 text-xs">Subscribe</Button>
                </div>
              </Form>
              <p className="text-xs text-grayscale-500">
                By subscribing you agree to with our{" "}
                <Link href="/" variant="underline">
                  Privacy Policy
                </Link>{" "}
                and provide consent to receive updates from our company.
              </p>
            </div>
          </div>
        </LayoutColumn>
      </Layout>
    </div>
  )
}
