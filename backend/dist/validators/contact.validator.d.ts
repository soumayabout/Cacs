import { z } from 'zod';
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    company: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    subject: z.ZodEnum<["Information", "Adhesion", "Partenariat", "Evenement", "Presse", "Autre"]>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    subject: "Information" | "Adhesion" | "Partenariat" | "Evenement" | "Presse" | "Autre";
    message: string;
    company?: string | undefined;
    phone?: string | undefined;
    country?: string | undefined;
}, {
    name: string;
    email: string;
    subject: "Information" | "Adhesion" | "Partenariat" | "Evenement" | "Presse" | "Autre";
    message: string;
    company?: string | undefined;
    phone?: string | undefined;
    country?: string | undefined;
}>;
export declare const membershipSchema: z.ZodObject<{
    companyName: z.ZodString;
    sector: z.ZodEnum<["Transport & Logistique", "Agroalimentaire & Pêche", "Finance & Investissement", "Technologies & IT", "Énergies Renouvelables", "Autre"]>;
    contactName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    country: z.ZodString;
    website: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    phone: string;
    country: string;
    companyName: string;
    sector: "Autre" | "Transport & Logistique" | "Agroalimentaire & Pêche" | "Finance & Investissement" | "Technologies & IT" | "Énergies Renouvelables";
    contactName: string;
    message?: string | undefined;
    website?: string | undefined;
}, {
    email: string;
    phone: string;
    country: string;
    companyName: string;
    sector: "Autre" | "Transport & Logistique" | "Agroalimentaire & Pêche" | "Finance & Investissement" | "Technologies & IT" | "Énergies Renouvelables";
    contactName: string;
    message?: string | undefined;
    website?: string | undefined;
}>;
export declare const newsletterSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
//# sourceMappingURL=contact.validator.d.ts.map