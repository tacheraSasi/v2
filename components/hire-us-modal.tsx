"use client";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";

interface HireUsModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function HireUsModal({ isOpen, onOpenChange }: HireUsModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const services = [
    { value: "custom-software", label: "Custom Software Development" },
    { value: "system-architecture", label: "System Architecture & Design" },
    { value: "api-development", label: "API Development & Integration" },
    { value: "consulting", label: "Technical Consulting" },
    { value: "maintenance", label: "System Maintenance & Support" },
    { value: "other", label: "Other Services" },
  ];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // TODO: Replace with actual API call to submit form data
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    // Simulating form submission for demo purposes
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
        setSubmitStatus("idle");
        onOpenChange(false);
      }, 2000);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = 
    formData.name.trim() && 
    formData.email.trim() && 
    isEmailValid(formData.email) &&
    formData.service && 
    formData.message.trim();

  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      placement="center"
      size="2xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Hire Us</h2>
          <p className="text-sm text-muted-foreground font-normal">
            Let&apos;s build something amazing together. Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </ModalHeader>
        <ModalBody>
          {submitStatus === "success" ? (
            <div className="py-8 text-center">
              <div className="mb-4 text-4xl">✓</div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We&apos;ve received your inquiry and will contact you shortly.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Input
                label="Full Name"
                placeholder="John Doe"
                value={formData.name}
                onValueChange={(value) => handleChange("name", value)}
                isRequired
                variant="bordered"
                labelPlacement="outside"
              />
              <Input
                label="Email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onValueChange={(value) => handleChange("email", value)}
                isRequired
                variant="bordered"
                labelPlacement="outside"
                isInvalid={formData.email.length > 0 && !isEmailValid(formData.email)}
                errorMessage={formData.email.length > 0 && !isEmailValid(formData.email) ? "Please enter a valid email address" : ""}
              />
              <Input
                label="Company / Organization"
                placeholder="Your Company Name"
                value={formData.company}
                onValueChange={(value) => handleChange("company", value)}
                variant="bordered"
                labelPlacement="outside"
              />
              <Select
                label="Service Interested In"
                placeholder="Select a service"
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
                isRequired
                variant="bordered"
                labelPlacement="outside"
              >
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </Select>
              <Textarea
                label="Project Details"
                placeholder="Tell us about your project, requirements, timeline, and budget..."
                value={formData.message}
                onValueChange={(value) => handleChange("message", value)}
                isRequired
                variant="bordered"
                labelPlacement="outside"
                minRows={4}
              />
            </div>
          )}
        </ModalBody>
        {submitStatus !== "success" && (
          <ModalFooter>
            <Button
              variant="light"
              onPress={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              onPress={handleSubmit}
              isLoading={isSubmitting}
              isDisabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}
