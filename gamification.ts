'use client'

export default function ProfilJoueur() {
  const joueur = {
    nom: 'Lucas',
    prenom: 'Martin',
    numero: 7,
    equipe: 'U17 Masculins',
    niveau: 'Or',
    xp: 420,
    xpProchainNiveau: 180,
    stats: {
      matchsJoues: 11,
      pointsTotaux: 200,
      moyennePoints: 18.2,
      rebonds: 47,
      passes: 56,
      interceptions: 12,
      contres: 8,
      fautes: 23,
      pourcentage2pts: 65,
      pourcentage3pts: 38,
      pourcentageLF: 82
    },
    badges: [
      { id: 1, nom: 'Sniper 3pts', icon: '🎯', description: '5+ paniers 3pts dans un match', debloqueDescription: 'Débloquer' },
      { id: 2, nom: 'Double-Double', icon: '💪', description: '10+ points ET 10+ rebonds', unlocked: true },
      { id: 3, nom: 'Passeur Décisif', icon: '🤝', description: '5+ passes dans un match', unlocked: true },
      { id: 4, nom: 'Machine à Points', icon: '🔥', description: '20+ points dans un match', unlocked: true },
    ],
    classements: [
      { categorie: 'Meilleur scoreur', position: 1, total: 12 },
      { categorie: 'Meilleur passeur', position: 2, total: 12 },
      { categorie: 'Meilleur rebondeur', position: 4, total: 12 },
    ]
  }

  const progressionNiveau = Math.round((joueur.xp / (joueur.xp + joueur.xpProchainNiveau)) * 100)

  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case 'Bronze': return 'from-orange-700 to-orange-900'
      case 'Argent': return 'from-gray-300 to-gray-500'
      case 'Or': return 'from-yellow-400 to-yellow-600'
      case 'Diamant': return 'from-cyan-300 to-blue-500'
      default: return 'from-orange-700 to-orange-900'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Profil */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-orange-500 text-4xl font-bold">
              {joueur.numero}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-1">{joueur.prenom} {joueur.nom}</h1>
              <div className="text-orange-100">{joueur.equipe}</div>
            </div>
          </div>

          {/* Niveau & XP */}
          <div className="mt-6 relative z-10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`bg-gradient-to-br ${getNiveauColor(joueur.niveau)} px-4 py-1 rounded-full text-sm font-bold`}>
                  {joueur.niveau}
                </div>
                <span className="text-orange-100 text-sm">{joueur.xp} XP</span>
              </div>
              <span className="text-orange-100 text-sm">{joueur.xpProchainNiveau} XP jusqu'à Diamant</span>
            </div>
            <div className="bg-white/20 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${progressionNiveau}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <div className="text-gray-400 text-sm mb-1">Matchs joués</div>
            <div className="text-3xl font-bold">{joueur.stats.matchsJoues}</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <div className="text-gray-400 text-sm mb-1">Points totaux</div>
            <div className="text-3xl font-bold text-orange-400">{joueur.stats.pointsTotaux}</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <div className="text-gray-400 text-sm mb-1">Moy. points</div>
            <div className="text-3xl font-bold text-green-400">{joueur.stats.moyennePoints}</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <div className="text-gray-400 text-sm mb-1">Passes déc.</div>
            <div className="text-3xl font-bold text-blue-400">{joueur.stats.passes}</div>
          </div>
        </div>

        {/* Stats détaillées */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-6">📊 Statistiques détaillées</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Colonne 1 */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Rebonds</span>
                  <span className="font-semibold">{joueur.stats.rebonds}</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Interceptions</span>
                  <span className="font-semibold">{joueur.stats.interceptions}</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Contres</span>
                  <span className="font-semibold">{joueur.stats.contres}</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Fautes</span>
                  <span className="font-semibold">{joueur.stats.fautes}</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>

            {/* Colonne 2 - Pourcentages */}
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Tirs 2 points</div>
                <div className="text-2xl font-bold text-green-400">{joueur.stats.pourcentage2pts}%</div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Tirs 3 points</div>
                <div className="text-2xl font-bold text-blue-400">{joueur.stats.pourcentage3pts}%</div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Lancers francs</div>
                <div className="text-2xl font-bold text-purple-400">{joueur.stats.pourcentageLF}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-6">🏆 Badges débloqués</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {joueur.badges.map((badge) => (
              <div
                key={badge.id}
                className={`relative rounded-lg p-4 text-center transition-all ${
                  badge.unlocked
                    ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50'
                    : 'bg-gray-700/30 border border-gray-600 opacity-50'
                }`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <div className="font-semibold text-sm mb-1">{badge.nom}</div>
                <div className="text-xs text-gray-400">{badge.description}</div>
                {!badge.unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                    <span className="text-xs font-medium">🔒</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Classements équipe */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-6">📈 Classements équipe</h2>
          
          <div className="space-y-3">
            {joueur.classements.map((classement, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                    classement.position === 1
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900'
                      : classement.position === 2
                      ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-gray-900'
                      : classement.position === 3
                      ? 'bg-gradient-to-br from-orange-600 to-orange-800 text-white'
                      : 'bg-gray-600 text-white'
                  }`}>
                    {classement.position}
                  </div>
                  <div>
                    <div className="font-medium">{classement.categorie}</div>
                    <div className="text-sm text-gray-400">Sur {classement.total} joueurs</div>
                  </div>
                </div>
                {classement.position <= 3 && (
                  <div className="text-2xl">
                    {classement.position === 1 ? '🥇' : classement.position === 2 ? '🥈' : '🥉'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progression récente */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 px-6 py-3 rounded-full">
            <span className="text-green-400 text-xl">📈</span>
            <span className="text-green-400 font-medium">+45 XP ce weekend !</span>
          </div>
        </div>
      </div>
    </div>
  )
}
