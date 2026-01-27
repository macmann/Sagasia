type ContactActionState = {
  status: "idle" | "error" | "success";
  message: string;
  fieldErrors: Record<string, string>;
};

type ContactPayload = {
  name: string;
  company: string;
  role: string;
  email: string;
  industry: string;
  inquiryType: string;
  description: string;
};

const emailPattern = /\S+@\S+\.\S+/;

const requiredFields: Array<keyof ContactPayload> = [
  "name",
  "company",
  "role",
  "email",
  "industry",
  "inquiryType",
  "description",
];

const defaultValidationMessage = "Please fix the highlighted fields and try again.";

function getPayloadValue(formData: FormData, key: keyof ContactPayload) {
  return (formData.get(key) ?? "").toString().trim();
}

export function getContactPayload(formData: FormData): ContactPayload {
  return {
    name: getPayloadValue(formData, "name"),
    company: getPayloadValue(formData, "company"),
    role: getPayloadValue(formData, "role"),
    email: getPayloadValue(formData, "email"),
    industry: getPayloadValue(formData, "industry"),
    inquiryType: getPayloadValue(formData, "inquiryType"),
    description: getPayloadValue(formData, "description"),
  };
}

export function validateContactPayload(payload: ContactPayload): ContactActionState {
  const fieldErrors: Record<string, string> = {};

  for (const field of requiredFields) {
    if (!payload[field]) {
      fieldErrors[field] = "This field is required.";
    }
  }

  if (payload.email && !emailPattern.test(payload.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: defaultValidationMessage,
      fieldErrors,
    };
  }

  return {
    status: "idle",
    message: "",
    fieldErrors: {},
  };
}

export type { ContactActionState, ContactPayload };
