"use server";

type ContactActionState = {
  status: "idle" | "error" | "success";
  message: string;
  fieldErrors: Record<string, string>;
};

const emailPattern = /\S+@\S+\.\S+/;

const requiredFields = [
  "name",
  "company",
  "role",
  "email",
  "industry",
  "inquiryType",
  "description",
];

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const payload = {
    name: (formData.get("name") ?? "").toString().trim(),
    company: (formData.get("company") ?? "").toString().trim(),
    role: (formData.get("role") ?? "").toString().trim(),
    email: (formData.get("email") ?? "").toString().trim(),
    industry: (formData.get("industry") ?? "").toString().trim(),
    inquiryType: (formData.get("inquiryType") ?? "").toString().trim(),
    description: (formData.get("description") ?? "").toString().trim(),
  };

  const fieldErrors: Record<string, string> = {};

  for (const field of requiredFields) {
    if (!payload[field as keyof typeof payload]) {
      fieldErrors[field] = "This field is required.";
    }
  }

  if (payload.email && !emailPattern.test(payload.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // TODO: Integrate with SMTP/Resend (or another email provider) to send the inquiry.
  console.log("Contact inquiry received:", payload);

  return {
    status: "success",
    message: "Thanks for reaching out. Our team will respond within two business days.",
    fieldErrors: {},
  };
}

export type { ContactActionState };
