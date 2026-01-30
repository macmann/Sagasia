"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { ContactActionState, ContactPayload } from "./actions";
import { getContactPayload, validateContactPayload } from "./actions";

const initialState: ContactActionState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

const successMessage = "Thanks for reaching out. Our team will respond within two business days.";
const genericErrorMessage = "We couldn't submit your request right now. Please try again shortly.";
const missingEndpointMessage = "This form isn't configured yet. Please email info@sagasia.com.";

type FieldProps = {
  id: string;
  label: string;
  name: string;
  type?: "text" | "email";
  placeholder?: string;
  error?: string;
  optional?: boolean;
};

function Field({ id, label, name, type = "text", placeholder, error }: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-text-dark/80" htmlFor={id}>
        {label}
      </label>
      <input
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl border border-border px-4 py-2 text-sm text-text-dark placeholder:text-text-dark/60"
        id={id}
        name={name}
        placeholder={placeholder}
        required
        type={type}
      />
      {error ? (
        <p className="text-sm text-rose-600" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SubmitButtonProps = {
  isSubmitting: boolean;
};

function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={isSubmitting} className={isSubmitting ? "opacity-70" : undefined}>
      {isSubmitting ? "Sending..." : "Send inquiry"}
    </Button>
  );
}

async function sendContactRequest(payload: ContactPayload, endpoint: string) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

export function ContactForm() {
  const [state, setState] = useState<ContactActionState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const defaultInquiryType = reason === "download" ? "download" : "";
  const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = getContactPayload(new FormData(form));
    const validationState = validateContactPayload(payload);

    if (validationState.status === "error") {
      setState(validationState);
      return;
    }

    if (!contactEndpoint) {
      setState({
        status: "error",
        message: missingEndpointMessage,
        fieldErrors: {},
      });
      return;
    }

    setIsSubmitting(true);
    setState({ status: "idle", message: "", fieldErrors: {} });

    try {
      await sendContactRequest(payload, contactEndpoint);
      setState({
        status: "success",
        message: successMessage,
        fieldErrors: {},
      });
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed", error);
      setState({
        status: "error",
        message: genericErrorMessage,
        fieldErrors: {},
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        {state.message ? (
          <div
            className={`rounded-xl border px-4 py-3 text-sm ${
              state.status === "success"
                ? "border-accent/30 bg-accent/10 text-text-dark"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
            role="status"
            aria-live="polite"
          >
            {state.message}
          </div>
        ) : null}
        <p className="text-sm text-text-dark/70">
          Please share a brief overview of your situation so we can direct your inquiry appropriately.
        </p>
        <Field
          id="name"
          label="Name"
          name="name"
          placeholder="Avery Patel"
          error={state.fieldErrors.name}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id="company"
            label="Company"
            name="company"
            placeholder="Sagasia"
            error={state.fieldErrors.company}
          />
          <Field id="role" label="Role" name="role" placeholder="Director" error={state.fieldErrors.role} />
        </div>
        <Field
          id="email"
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@sagasia.com"
          error={state.fieldErrors.email}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id="industry"
            label="Industry"
            name="industry"
            placeholder="Fintech"
            error={state.fieldErrors.industry}
          />
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-dark/80" htmlFor="inquiryType">
              Type of Inquiry
            </label>
            <select
              aria-invalid={Boolean(state.fieldErrors.inquiryType)}
              aria-describedby={state.fieldErrors.inquiryType ? "inquiryType-error" : undefined}
              className="w-full rounded-xl border border-border px-4 py-2 text-sm text-text-dark"
              id="inquiryType"
              name="inquiryType"
              required
              defaultValue={defaultInquiryType}
            >
              <option disabled value="">
                Select an option
              </option>
              <option value="download">Proof points / downloads</option>
              <option value="advisory">Strategic advisory</option>
              <option value="market-entry">Market entry</option>
              <option value="partnerships">Partnerships</option>
              <option value="investment">Investment inquiry</option>
              <option value="other">Other</option>
            </select>
            {state.fieldErrors.inquiryType ? (
              <p className="text-sm text-rose-600" id="inquiryType-error">
                {state.fieldErrors.inquiryType}
              </p>
            ) : null}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-dark/80" htmlFor="description">
            Brief Description of Your Objective or Challenge
          </label>
          <textarea
            aria-invalid={Boolean(state.fieldErrors.description)}
            aria-describedby={state.fieldErrors.description ? "description-error" : undefined}
            className="min-h-[160px] w-full rounded-xl border border-border px-4 py-2 text-sm text-text-dark placeholder:text-text-dark/60"
            id="description"
            name="description"
            placeholder="Tell us about your objectives, stakeholders, and timeline."
            required
          />
          {state.fieldErrors.description ? (
            <p className="text-sm text-rose-600" id="description-error">
              {state.fieldErrors.description}
            </p>
          ) : null}
        </div>
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Card>
  );
}
