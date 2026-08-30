"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const stakeholderTypes = [
  "Laboratory",
  "Research Institution",
  "Recycler",
  "Manufacturer",
  "Incubator / Innovation Organisation",
  "Sustainability / ESG Team",
  "Other",
];

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const [stakeholderType, setStakeholderType] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.success && state.message) {
      formRef.current?.reset();
      setTimeout(() => {
        setStakeholderType("");
      }, 0);
    }
  }, [state.success, state.message]);

  const fieldError = (field: string) => state.errors?.[field]?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-[#0c2a19]/90 border border-emerald-800/60 p-8 sm:p-10 rounded-3xl shadow-2xl shadow-emerald-950/60 backdrop-blur-xl relative overflow-hidden"
    >
      {/* Success state */}
      <AnimatePresence mode="wait">
        {state.success && state.message ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-900/80 border border-[#2da021] flex items-center justify-center mb-5 text-[#2da021]">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Message Received</h3>
            <p className="text-emerald-100/80 text-sm max-w-sm leading-relaxed">{state.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 text-sm text-[#f88a0d] hover:underline font-medium transition-colors duration-200"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            action={formAction}
            className="space-y-6 relative z-10"
            noValidate
          >
            {/* Error banner */}
            <AnimatePresence>
              {!state.success && state.message && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-950/60 border border-red-800/80 text-sm text-red-200"
                >
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{state.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-emerald-200/90">
                Name <span className="text-[#f88a0d]">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="bg-emerald-950/60 border-emerald-800/60 text-white placeholder:text-emerald-300/30 focus:border-[#2da021] focus:ring-[#2da021]/20 h-12 rounded-xl transition-all duration-200"
                aria-describedby={fieldError("name") ? "name-error" : undefined}
                aria-invalid={!!fieldError("name")}
              />
              {fieldError("name") && (
                <p id="name-error" className="text-xs text-red-400">
                  {fieldError("name")}
                </p>
              )}
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-xs font-semibold uppercase tracking-wider text-emerald-200/90">
                Organisation
              </Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Your organisation"
                className="bg-emerald-950/60 border-emerald-800/60 text-white placeholder:text-emerald-300/30 focus:border-[#2da021] focus:ring-[#2da021]/20 h-12 rounded-xl transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-emerald-200/90">
                Email <span className="text-[#f88a0d]">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@organisation.com"
                className="bg-emerald-950/60 border-emerald-800/60 text-white placeholder:text-emerald-300/30 focus:border-[#2da021] focus:ring-[#2da021]/20 h-12 rounded-xl transition-all duration-200"
                aria-describedby={fieldError("email") ? "email-error" : undefined}
                aria-invalid={!!fieldError("email")}
              />
              {fieldError("email") && (
                <p id="email-error" className="text-xs text-red-400">
                  {fieldError("email")}
                </p>
              )}
            </div>

            {/* Stakeholder type */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-emerald-200/90">
                Organisation / Stakeholder Type <span className="text-[#f88a0d]">*</span>
              </Label>
              <input type="hidden" name="stakeholderType" value={stakeholderType} />
              <Select value={stakeholderType} onValueChange={(val) => setStakeholderType(val || "")}>
                <SelectTrigger
                  className="w-full bg-emerald-950/70 border-emerald-800/70 text-white hover:border-emerald-700/80 focus:border-[#2da021] focus:ring-2 focus:ring-[#2da021]/30 h-12 rounded-xl transition-all duration-200"
                  aria-describedby={
                    fieldError("stakeholderType") ? "type-error" : undefined
                  }
                  aria-invalid={!!fieldError("stakeholderType")}
                >
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-[#092214]/95 border-emerald-700/60 text-white shadow-2xl backdrop-blur-xl">
                  {stakeholderTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldError("stakeholderType") && (
                <p id="type-error" className="text-xs text-red-400">
                  {fieldError("stakeholderType")}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-emerald-200/90">
                Message <span className="text-[#f88a0d]">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your interest in circular laboratory solutions..."
                className="bg-emerald-950/60 border-emerald-800/60 text-white placeholder:text-emerald-300/30 focus:border-[#2da021] focus:ring-[#2da021]/20 rounded-xl transition-all duration-200 resize-y min-h-[120px]"
                aria-describedby={fieldError("message") ? "message-error" : undefined}
                aria-invalid={!!fieldError("message")}
              />
              {fieldError("message") && (
                <p id="message-error" className="text-xs text-red-400">
                  {fieldError("message")}
                </p>
              )}
            </div>

            {/* Honeypot (hidden from users) */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="honeypot">Leave this empty</label>
              <input
                id="honeypot"
                name="honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              data-umami-event="contact-form-submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f88a0d] hover:bg-[#d87609] text-white text-base font-semibold tracking-wide rounded-xl transition-all duration-300 shadow-xl shadow-orange-950/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed group"
            >
              {isPending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
