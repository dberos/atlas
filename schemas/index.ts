import { z } from "zod"
 
export const UserSchema = z.object({
  email: z.string(),
  password: z.string(),
  token: z.string()
})

export const UndergraduateFormSchema = UserSchema.extend({
  name: z.string(),
  surname: z.string(),
  university: z.string(),
  department: z.string(),
  userType: z.enum(["UNDERGRADUATE", "COMPANY"])
})

export const CompanyFormSchema = UserSchema.extend({
  name: z.string(),
  city: z.string(),
  district: z.string(),
  street: z.string(),
  streetNumber: z.string(),
  userType: z.enum(["UNDERGRADUATE", "COMPANY"])
})