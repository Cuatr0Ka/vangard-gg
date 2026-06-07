import { useAuth } from "../context/AuthContext"
import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom"

export default function Feed() {
    const { user, profile } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate("/login")
    }

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>

            <div style={{
                minHeight: "100vh", background: "#07070f",
                fontFamily: "'Barlow', sans-serif", color: "#e2e8f0"
            }}>

                {/* Navbar */}
                <nav style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0 48px", height: "64px",
                    background: "rgba(7,7,15,0.95)",
                    borderBottom: "1px solid rgba(124,106,247,0.12)",
                    position: "sticky", top: 0, zIndex: 100,
                    backdropFilter: "blur(12px)"
                }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                        <span style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: "28px", fontWeight: 700,
                            color: "#fff", letterSpacing: "8px", lineHeight: 1
                        }}>
                            VANG<span style={{ color: "#7c6af7" }}>A</span>RD
                        </span>
                        <span style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: "14px", color: "#2a2a4a", letterSpacing: "2px"
                        }}>.gg</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                        <span style={{ color: "#6b7280", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>Explorar</span>
                        <span style={{ color: "#6b7280", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>Mi Squad</span>
                        <span style={{ color: "#6b7280", fontSize: "15px", fontWeight: 500, cursor: "pointer" }}>Amigos</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px", padding: "8px 14px"
                        }}>
                            <div style={{
                                width: "28px", height: "28px", borderRadius: "50%",
                                background: "rgba(124,106,247,0.2)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: "13px", fontWeight: 700, color: "#a89ff9"
                            }}>
                                {(profile?.username?.[0] ?? user?.email?.[0])?.toUpperCase()}
                            </div>
                            <span style={{ fontSize: "14px", color: "#9ca3af" }}>
                                {profile?.username ?? user?.email?.split("@")[0]}
                            </span>
                        </div>

                        <button
                            onClick={handleLogout}
                            style={{
                                padding: "8px 18px", borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.08)",
                                background: "transparent", color: "#6b7280",
                                fontSize: "14px", cursor: "pointer",
                                fontFamily: "'Barlow', sans-serif",
                                transition: "all 0.2s"
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)"; e.currentTarget.style.color = "#f87171" }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#6b7280" }}
                        >
                            Salir
                        </button>
                    </div>
                </nav>

                {/* Hero del feed */}
                <div style={{
                    padding: "64px 48px 48px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    position: "relative", overflow: "hidden"
                }}>
                    <div style={{
                        position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)",
                        width: "600px", height: "400px", borderRadius: "50%", pointerEvents: "none",
                        background: "radial-gradient(circle, rgba(124,106,247,0.06) 0%, transparent 70%)"
                    }} />

                    <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            background: "rgba(124,106,247,0.1)", border: "1px solid rgba(124,106,247,0.25)",
                            borderRadius: "999px", padding: "6px 16px", marginBottom: "20px"
                        }}>
                            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#a89ff9", animation: "pulse 2s infinite" }} />
                            <span style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                color: "#a89ff9", fontSize: "13px", letterSpacing: "3px", fontWeight: 600
                            }}>
                                POSTS ACTIVOS AHORA
                            </span>
                        </div>

                        <h1 style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: "48px", fontWeight: 700, color: "#fff",
                            letterSpacing: "1px", lineHeight: 1.1, marginBottom: "12px"
                        }}>
                            Bienvenido, <span style={{ color: "#7c6af7" }}>{profile?.username ?? "jugador"}</span>
                        </h1>
                        <p style={{ color: "#6b7280", fontSize: "17px", lineHeight: 1.6 }}>
                            Explora los posts activos y conecta con jugadores que buscan exactamente lo que tú ofreces.
                        </p>
                    </div>
                </div>

                {/* Contenido principal */}
                <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "48px 48px" }}>

                    {/* Filtros */}
                    <div style={{ display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap" }}>
                        {["Todos", "Valorant", "Apex Legends", "League of Legends", "CS2", "Fortnite"].map((f, i) => (
                            <button key={i} style={{
                                padding: "8px 18px", borderRadius: "999px",
                                border: i === 0 ? "1px solid rgba(124,106,247,0.6)" : "1px solid rgba(255,255,255,0.08)",
                                background: i === 0 ? "rgba(124,106,247,0.15)" : "transparent",
                                color: i === 0 ? "#a89ff9" : "#6b7280",
                                fontSize: "14px", fontWeight: 600, cursor: "pointer",
                                fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "1px",
                                transition: "all 0.2s"
                            }}>
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Posts */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "16px" }}>
                        {[
                            { user: "MrPhoenix_", game: "Valorant", rank: "Diamond III", style: "Competitivo", slots: 2, region: "LATAM", desc: "Busco 2 duelistas serios para rankear esta noche. Voz obligatoria." },
                            { user: "SkyKnight", game: "Apex Legends", rank: "Platinum", style: "Semi-comp", slots: 1, region: "NA", desc: "Grind nocturno de ranked. Busco un jugador con buena comunicación." },
                            { user: "ZeroX_99", game: "League of Legends", rank: "Gold II", style: "Casual", slots: 3, region: "EUW", desc: "Normal games, buen ambiente. No tóxicos por favor." },
                            { user: "NightWolf", game: "CS2", rank: "MG2", style: "Competitivo", slots: 2, region: "EU", desc: "Premier mode. Busco duo o trio para subir de rating." },
                            { user: "StarFire", game: "Fortnite", rank: "Champion", style: "Competitivo", slots: 1, region: "NA", desc: "Arena y torneos. Solo jugadores serios con buen aim." },
                            { user: "IronClad", game: "Valorant", rank: "Immortal I", style: "Competitivo", slots: 1, region: "LATAM", desc: "Busco controller o iniciador para push a Radiant." },
                        ].map((post, i) => (
                            <div key={i} style={{
                                borderRadius: "16px", padding: "24px",
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                transition: "all 0.2s", cursor: "pointer"
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,106,247,0.3)"; e.currentTarget.style.background = "rgba(124,106,247,0.04)" }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)" }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                    <div style={{
                                        width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0,
                                        background: "rgba(124,106,247,0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontSize: "16px", fontWeight: 700, color: "#a89ff9"
                                    }}>
                                        {post.user[0]}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: "15px", color: "#e2e8f0" }}>{post.user}</div>
                                        <div style={{ fontSize: "13px", color: "#4b5563", marginTop: "2px" }}>{post.game}</div>
                                    </div>
                                </div>

                                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
                                    {post.desc}
                                </p>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                                    {[
                                        { label: post.rank, color: "rgba(124,106,247,0.15)", textColor: "#a89ff9" },
                                        { label: post.style, color: "rgba(29,158,117,0.15)", textColor: "#5dcaa5" },
                                        { label: post.region, color: "rgba(255,255,255,0.06)", textColor: "#6b7280" },
                                        { label: `${post.slots} slots`, color: "rgba(239,159,39,0.15)", textColor: "#ef9f27" },
                                    ].map((tag, j) => (
                                        <span key={j} style={{
                                            padding: "4px 10px", borderRadius: "6px",
                                            background: tag.color, color: tag.textColor,
                                            fontSize: "12px", fontWeight: 600,
                                            fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.5px"
                                        }}>
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>

                                <button style={{
                                    width: "100%", padding: "10px", borderRadius: "10px",
                                    border: "1px solid rgba(124,106,247,0.3)",
                                    background: "rgba(124,106,247,0.1)",
                                    color: "#a89ff9", fontSize: "13px", fontWeight: 700,
                                    cursor: "pointer", letterSpacing: "2px",
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    transition: "all 0.2s"
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,106,247,0.2)"; e.currentTarget.style.color = "#fff" }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,106,247,0.1)"; e.currentTarget.style.color = "#a89ff9" }}
                                >
                                    SOLICITAR UNIRSE
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}