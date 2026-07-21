import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://correiorastreio.com.br";return ["","/blog","/sobre","/contato","/privacidade","/termos"].map((p)=>({url:`${base}${p}`,lastModified:new Date(),changeFrequency:p===""?"daily":"monthly",priority:p===""?1:.7}));}
