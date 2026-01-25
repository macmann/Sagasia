"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { ContactActionState } from "./actions";
import { submitContact } from "./actions";

const initialState: ContactActionState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

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
      <label className="text-sm font-semibold text-slate-700" htmlFor={id}>
        {label}
      </label>
      <input
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
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

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className={pending ? "opacity-70" : undefined}>
      {pending ? "Sending..." : "Send inquiry"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <Card>
      <form action={formAction} className="space-y-4">
        {state.message ? (
          <div
            className={`rounded-xl border px-4 py-3 text-sm ${
              state.status === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
          >
            {state.message}
          </div>
        ) : null}
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
          label="Email address"
          name="email"
          type="email"
          placeholder="you@sagasia.com"
          error={state.fieldErrors.email}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="industry" label="Industry" name="industry" placeholder="Fintech" error={state.fieldErrors.industry} />
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700" htmlFor="inquiryType">
              Type of inquiry
            </label>
            <select
              aria-invalid={Boolean(state.fieldErrors.inquiryType)}
              aria-describedby={state.fieldErrors.inquiryType ? "inquiryType-error" : undefined}
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
              id="inquiryType"
              name="inquiryType"
              required
              defaultValue=""
            >
              <option disabled value="">
                Select an option
              </option>
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
          <label className="text-sm font-semibold text-slate-700" htmlFor="description">
            Brief description
          </label>
          <textarea
            aria-invalid={Boolean(state.fieldErrors.description)}
            aria-describedby={state.fieldErrors.description ? "description-error" : undefined}
            className="min-h-[160px] w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
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
        <SubmitButton />
      </form>
    </Card>
  );
}
