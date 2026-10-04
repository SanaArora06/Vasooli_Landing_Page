import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SUCCESS_MESSAGE, validatePilot } from "../src/lib/pilot-schema.ts";

const valid = {
  name: "Ananya Iyer",
  contactMethod: "email",
  contactValue: "ananya@example.com",
  stage: "tests",
  language: "Hindi",
  consent: true,
};

describe("validatePilot", () => {
  it("accepts a complete email submission", () => {
    const result = validatePilot(valid);
    assert.equal(result.ok, true);
    if (result.ok) {
      assert.equal(result.value.contactValue, "ananya@example.com");
      assert.equal(result.value.language, "Hindi");
    }
  });

  it("normalises a phone number and allows a blank language", () => {
    const result = validatePilot({
      ...valid,
      contactMethod: "phone",
      contactValue: "+91 98765-43210",
      language: "",
      stage: "discharge",
    });
    assert.equal(result.ok, true);
    if (result.ok) {
      assert.equal(result.value.contactValue, "+919876543210");
      assert.equal(result.value.language, null);
    }
  });

  it("requires consent and a real contact", () => {
    const result = validatePilot({
      ...valid,
      contactValue: "not-an-email",
      consent: false,
      stage: "insurer",
    });
    assert.equal(result.ok, false);
    if (!result.ok) {
      assert.match(result.fields.contactValue ?? "", /email/i);
      assert.match(result.fields.consent ?? "", /Consent/);
      assert.match(result.fields.stage ?? "", /process/i);
    }
  });

  it("keeps the success sentence exact", () => {
    assert.equal(
      SUCCESS_MESSAGE,
      "Your interest has been recorded. You have not submitted a claim.",
    );
  });
});
