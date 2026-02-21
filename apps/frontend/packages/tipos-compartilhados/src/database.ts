// Supabase Database Types
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      contas: {
        Row: { id: string; name: string; email: string; status: string; created_at: string; updated_at: string };
      };
      usuarios: {
        Row: { id: string; conta_id: string; email: string; name: string | null; role: string; created_at: string; updated_at: string };
      };
      links_rastreaveis: {
        Row: { id: string; conta_id: string; name: string; description: string | null; short_code: string | null; created_at: string; updated_at: string };
      };
      contatos: {
        Row: { id: string; conta_id: string; name: string | null; phone: string | null; email: string | null; stage_id: string | null; source: string | null; created_at: string; updated_at: string };
      };
      etapas_jornada: {
        Row: { id: string; conta_id: string; name: string; description: string | null; order_position: number | null; created_at: string; updated_at: string };
      };
      cliques: {
        Row: { id: string; conta_id: string; link_id: string; click_id: string | null; ip_address: string | null; user_agent: string | null; timestamp: string; created_at: string };
      };
      mensagens: {
        Row: { id: string; conta_id: string; contact_id: string | null; content: string; direction: string | null; status: string | null; created_at: string; updated_at: string };
      };
      conexoes_whatsapp: {
        Row: { id: string; conta_id: string; phone: string; webhook_secret: string | null; status: string; created_at: string; updated_at: string };
      };
      configuracoes_pixel: {
        Row: { id: string; conta_id: string; pixel_id: string; access_token: string | null; status: string; created_at: string; updated_at: string };
      };
    };
  };
}
