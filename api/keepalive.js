// Trésor JCF — « réveil » quotidien de la base Supabase.
// Sur l'offre gratuite, un projet sans aucune activité pendant une semaine est mis en pause.
// Vercel appelle cette page une fois par jour (voir "crons" dans vercel.json) : une petite requête publique
// suffit pour que la base reste active. Elle ne lit aucune donnée privée.
//
// Si tu changes de projet Supabase un jour, mets ici les mêmes valeurs que dans config.js.
const SUPABASE_URL = 'https://siubwnwuoxavikuujqrf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdWJ3bnd1b3hhdmlrdXVqcXJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4NzcwNjgsImV4cCI6MjEwODQ1MzA2OH0.ZhoXowTFp35jklhmaWz-DTU3VjBYywNpr2TN36m-dTY';

module.exports = async (req, res) => {
  try {
    const r = await fetch(SUPABASE_URL + '/rest/v1/rpc/infos_accueil', {
      method: 'POST',
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: 'Bearer ' + SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
      body: '{}',
    });
    res.status(r.ok ? 200 : 502).json({ ok: r.ok, status: r.status, at: new Date().toISOString() });
  } catch (e) {
    res.status(502).json({ ok: false, error: 'injoignable' });
  }
};
