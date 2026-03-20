// types/database.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clubs: {
        Row: {
          id: string
          nom: string
          president_email: string
          password_hash: string
          logo_url: string | null
          stripe_customer_id: string | null
          subscription_status: 'active' | 'suspended' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          nom: string
          president_email: string
          password_hash: string
          logo_url?: string | null
          stripe_customer_id?: string | null
          subscription_status?: 'active' | 'suspended' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          nom?: string
          president_email?: string
          password_hash?: string
          logo_url?: string | null
          stripe_customer_id?: string | null
          subscription_status?: 'active' | 'suspended' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
      equipes: {
        Row: {
          id: string
          club_id: string
          nom: string
          categorie: string | null
          coach_nom: string | null
          qr_code: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          club_id: string
          nom: string
          categorie?: string | null
          coach_nom?: string | null
          qr_code: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          club_id?: string
          nom?: string
          categorie?: string | null
          coach_nom?: string | null
          qr_code?: string
          created_at?: string
          updated_at?: string
        }
      }
      joueurs: {
        Row: {
          id: string
          equipe_id: string
          nom: string
          prenom: string
          numero_maillot: number | null
          photo_url: string | null
          qr_code: string
          niveau_xp: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          equipe_id: string
          nom: string
          prenom: string
          numero_maillot?: number | null
          photo_url?: string | null
          qr_code: string
          niveau_xp?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          equipe_id?: string
          nom?: string
          prenom?: string
          numero_maillot?: number | null
          photo_url?: string | null
          qr_code?: string
          niveau_xp?: number
          created_at?: string
          updated_at?: string
        }
      }
      matchs: {
        Row: {
          id: string
          equipe_id: string
          adversaire: string
          date_match: string
          domicile: boolean
          score_equipe: number
          score_adversaire: number
          statut: 'a_venir' | 'en_cours' | 'termine'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          equipe_id: string
          adversaire: string
          date_match: string
          domicile?: boolean
          score_equipe?: number
          score_adversaire?: number
          statut?: 'a_venir' | 'en_cours' | 'termine'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          equipe_id?: string
          adversaire?: string
          date_match?: string
          domicile?: boolean
          score_equipe?: number
          score_adversaire?: number
          statut?: 'a_venir' | 'en_cours' | 'termine'
          created_at?: string
          updated_at?: string
        }
      }
      actions_match: {
        Row: {
          id: string
          match_id: string
          joueur_id: string
          type_action: ActionType
          quart_temps: number | null
          temps_restant: number | null
          created_at: string
        }
        Insert: {
          id?: string
          match_id: string
          joueur_id: string
          type_action: ActionType
          quart_temps?: number | null
          temps_restant?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          match_id?: string
          joueur_id?: string
          type_action?: ActionType
          quart_temps?: number | null
          temps_restant?: number | null
          created_at?: string
        }
      }
    }
  }
}

export type ActionType =
  | 'panier_2pts'
  | 'panier_3pts'
  | 'lf_reussi'
  | 'lf_rate'
  | 'rebond_off'
  | 'rebond_def'
  | 'passe'
  | 'faute'
  | 'interception'
  | 'contre'

export type Club = Database['public']['Tables']['clubs']['Row']
export type Equipe = Database['public']['Tables']['equipes']['Row']
export type Joueur = Database['public']['Tables']['joueurs']['Row']
export type Match = Database['public']['Tables']['matchs']['Row']
export type ActionMatch = Database['public']['Tables']['actions_match']['Row']

export interface StatsJoueur {
  matchs_joues: number
  points_totaux: number
  paniers_2pts: number
  paniers_3pts: number
  lf_reussis: number
  lf_rates: number
  rebonds_off: number
  rebonds_def: number
  rebonds_totaux: number
  passes: number
  interceptions: number
  contres: number
  fautes: number
  pourcentage_2pts: number
  pourcentage_3pts: number
  pourcentage_lf: number
}

export type NiveauJoueur = 'Bronze' | 'Argent' | 'Or' | 'Diamant'

export interface Badge {
  id: string
  nom: string
  description: string
  icon: string
  condition: (stats: StatsJoueur) => boolean
}
