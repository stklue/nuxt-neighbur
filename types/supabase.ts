export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Order: {
        Row: {
          confirmed: string | null
          created_at: string | null
          id: number
          quantity: number | null
          rating: number | null
          reason: string | null
          total: number | null
          user_id: number | null
          uid: string | null
        }
        Insert: {
          confirmed?: string | null
          created_at?: string | null
          id?: number
          quantity?: number | null
          rating?: number | null
          reason?: string | null
          total?: number | null
          user_id?: number | null
          uid?: string | null
        }
        Update: {
          confirmed?: string | null
          created_at?: string | null
          id?: number
          quantity?: number | null
          rating?: number | null
          reason?: string | null
          total?: number | null
          user_id?: number | null
        }
      }
      Product: {
        Row: {
          available: number | null
          created_at: string | null
          description: string | null
          expire_at: string | null
          id: number
          image: string | null
          pname: string | null
          plate: number | null
          price: number | null
          recurring: boolean | null
          type: string | null
          user_product: string | null
        }
        Insert: {
          available?: number | null
          created_at?: string | null
          description?: string | null
          expire_at?: string | null
          id?: number
          image?: string | null
          name?: string | null
          plate?: number | null
          price?: number | null
          recurring?: boolean | null
          type?: string | null
        }
        Update: {
          available?: number | null
          created_at?: string | null
          description?: string | null
          expire_at?: string | null
          id?: number
          image?: string | null
          name?: string | null
          plate?: number | null
          price?: number | null
          recurring?: boolean | null
          type?: string | null
        }
      }
      request: {
        Row: {
          accepted: boolean | null
          counter: number | null
          created_at: string | null
          id: number
          limit: number | null
          price: number | null
          req: string | null
        }
        Insert: {
          accepted?: boolean | null
          counter?: number | null
          created_at?: string | null
          id?: number
          limit?: number | null
          price?: number | null
          req?: string | null
        }
        Update: {
          accepted?: boolean | null
          counter?: number | null
          created_at?: string | null
          id?: number
          limit?: number | null
          price?: number | null
          req?: string | null
        }
      }
      User: {
        Row: {
          created_at: string | null
          id: string
          location: string | null
          name: string | null
          online: boolean | null
          subscription: number | null
          user_orders: number | null
          user_product: number | null
          user_requests: number | null
        }
        Insert: {
          created_at?: string | null
          id: string
          location?: string | null
          name?: string | null
          online?: boolean | null
          subscription?: number | null
          user_orders?: number | null
          user_product?: number | null
          user_requests?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          location?: string | null
          name?: string | null
          online?: boolean | null
          subscription?: number | null
          user_orders?: number | null
          user_product?: number | null
          user_requests?: number | null
        }
      }
     
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
