// prodi.schema.js
import z from "zod";

export const storeProdiSchema = z.object({
    kode: z.string().trim().min(2, "Kode Prodi Minimal 2 Karakter"),
    nama_prodi: z.string().trim().min(3, "Kode Prodi Minimal 3 Karakter"),
    fakultas_id : z.string().trim().min(24, "Fakultas ID minimal 24 karakter")
})

export const updateProdiSchema = z.object({
    kode: z.string().trim().min(2, "Kode Prodi Minimal 2 Karakter"),
    nama_prodi: z.string().trim().min(3, "Kode Prodi Minimal 3 Karakter"),
    fakultas_id : z.string().trim().min(24, "Fakultas ID minimal 24 karakter")
})