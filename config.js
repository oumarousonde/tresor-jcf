// Trésor JCF — configuration Supabase
// Ces deux valeurs sont PUBLIQUES (clé "anon") : elles peuvent rester dans le site.
// Ne mets JAMAIS ici la clé "service_role".
export const SUPABASE_URL = 'https://siubwnwuoxavikuujqrf.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdWJ3bnd1b3hhdmlrdXVqcXJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4NzcwNjgsImV4cCI6MjEwODQ1MzA2OH0.ZhoXowTFp35jklhmaWz-DTU3VjBYywNpr2TN36m-dTY';

// Bouton "Créer un compte" sur la page de connexion.
//   true  = visible (pratique pour créer TON compte la première fois, ou celui d'une personne du bureau)
//   false = caché (recommandé quand tu es seul : personne ne peut se créer de compte depuis le site)
export const SIGNUP_OPEN = true;
