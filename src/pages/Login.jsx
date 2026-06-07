import { useState } from "react"
import { supabase } from "../lib/supabase"
import { Link, useNavigate } from "react-router-dom"

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
)

const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
    </svg>
)

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            setError("Correo o contraseña incorrectos")
        } else {
            navigate("/feed")
        }
        setLoading(false)
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700&display=swap');
                @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
                * { box-sizing: border-box; margin: 0; padding: 0; }
                input::placeholder { color: #3a3a5c; }
                input:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus {
                -webkit-text-fill-color: #e2e8f0;
                -webkit-box-shadow: 0 0 0px 1000px rgba(8,8,18,0.97) inset;
                transition: background-color 5000s ease-in-out 0s;
            }
            `}</style>

            <div style={{
                height: "100vh", width: "100vw", overflow: "hidden",
                background: "#07070f", display: "flex",
                alignItems: "center", justifyContent: "center",
                position: "relative", fontFamily: "'Barlow', sans-serif"
            }}>

                {/* VANGARD gigante de fondo */}
                <div style={{
                    position: "absolute", inset: 0, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "clamp(120px, 22vw, 280px)", fontWeight: 700,
                    letterSpacing: "24px", color: "transparent",
                    WebkitTextStroke: "1.5px rgba(124,106,247,0.05)",
                    userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap"
                }}>
                    VANGARD
                </div>

                {/* Grid */}
                <div style={{
                    position: "absolute", inset: 0, opacity: 0.02, pointerEvents: "none",
                    backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                    backgroundSize: "48px 48px"
                }} />

                {/* Glow central */}
                <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "1000px", height: "1000px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 65%)",
                    pointerEvents: "none"
                }} />

                {/* CONTENIDO */}
                <div style={{
                    position: "relative", zIndex: 10, width: "100%",
                    maxWidth: "1140px", padding: "0 48px",
                    display: "flex", alignItems: "center", gap: "72px",
                    marginTop: "-40px"
                }}>

                    {/* ── IZQUIERDA ── */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "22px" }}>

                        {/* Logo */}
                        <div>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                                <span style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: "72px", fontWeight: 700,
                                    color: "#fff", letterSpacing: "12px", lineHeight: 1
                                }}>
                                    VANG<span style={{ color: "#7c6af7" }}>A</span>RD
                                </span>
                                <span style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: "28px", color: "#2a2a4a", letterSpacing: "3px"
                                }}>.gg</span>
                            </div>
                            <div style={{ width: "64px", height: "3px", marginTop: "12px", borderRadius: "2px", background: "linear-gradient(90deg, #7c6af7, transparent)" }} />
                        </div>

                        {/* Badge */}
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            width: "fit-content",
                            background: "rgba(124,106,247,0.1)",
                            border: "1px solid rgba(124,106,247,0.25)",
                            borderRadius: "999px", padding: "8px 20px"
                        }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#a89ff9", animation: "pulse 2s infinite" }} />
                            <span style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                color: "#a89ff9", fontSize: "14px", letterSpacing: "3px", fontWeight: 600
                            }}>
                                2.4K JUGADORES ACTIVOS
                            </span>
                        </div>

                        {/* Headline */}
                        <div>
                            <div style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: "clamp(2.6rem, 3.8vw, 4.4rem)",
                                fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "1px"
                            }}>
                                Tu squad ideal,
                            </div>
                            <div style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: "clamp(2.6rem, 3.8vw, 4.4rem)",
                                fontWeight: 700, lineHeight: 1.05, letterSpacing: "1px",
                                WebkitTextStroke: "2px #7c6af7", color: "transparent"
                            }}>
                                sin el drama.
                            </div>
                            <p style={{
                                color: "#9ca3af", fontSize: "17px",
                                lineHeight: 1.65, marginTop: "16px", maxWidth: "380px",
                                fontWeight: 400
                            }}>
                                Conecta con jugadores que comparten tu estilo, rango y horario. Sin Discord caótico, sin Reddit lento.
                            </p>
                        </div>

                        {/* Stats */}
                        <div style={{
                            display: "flex", gap: "40px",
                            paddingTop: "18px",
                            borderTop: "1px solid rgba(255,255,255,0.06)"
                        }}>
                            {[
                                { num: "2.4K", label: "Jugadores" },
                                { num: "180+", label: "Juegos" },
                                { num: "94%", label: "Matches" },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontSize: "32px", fontWeight: 700, color: "#fff"
                                    }}>{s.num}</div>
                                    <div style={{ fontSize: "14px", color: "#4b5563", marginTop: "3px" }}>{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Features */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {[
                                { icon: "🎮", text: "Perfiles con rangos y estilos de juego" },
                                { icon: "🔍", text: "Búsqueda por juego, región e idioma" },
                                { icon: "⚡", text: "Solicitudes directas, sin ruido" },
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                    <span style={{ fontSize: "20px" }}>{item.icon}</span>
                                    <span style={{ color: "#6b7280", fontSize: "16px", fontWeight: 500 }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── DERECHA — CARD ── */}
                    <div style={{ width: "440px", flexShrink: 0 }}>
                        <div style={{
                            borderRadius: "28px", padding: "48px", position: "relative",
                            background: "rgba(8,8,18,0.97)",
                            border: "1px solid rgba(124,106,247,0.22)",
                            boxShadow: "0 0 140px rgba(124,106,247,0.1), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)"
                        }}>

                            {/* Acento top */}
                            <div style={{
                                position: "absolute", top: 0, left: "40px", right: "40px", height: "1px",
                                background: "linear-gradient(90deg, transparent, rgba(124,106,247,0.9), transparent)"
                            }} />

                            <div style={{ marginBottom: "32px" }}>
                                <div style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontSize: "38px", fontWeight: 700, color: "#fff", letterSpacing: "4px"
                                }}>
                                    BIENVENIDO
                                </div>
                                <div style={{ color: "#6b7280", fontSize: "16px", marginTop: "8px", fontWeight: 400 }}>
                                    Inicia sesión para encontrar tu squad
                                </div>
                            </div>

                            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

                                <div>
                                    <label style={{
                                        display: "block", fontSize: "12px", color: "#9ca3af",
                                        letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px",
                                        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600
                                    }}>Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{
                                            width: "100%", borderRadius: "14px", padding: "16px 18px",
                                            fontSize: "16px", color: "#e2e8f0", outline: "none",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.09)",
                                            transition: "border-color 0.2s",
                                            fontFamily: "'Barlow', sans-serif"
                                        }}
                                        onFocus={e => e.target.style.borderColor = "rgba(124,106,247,0.6)"}
                                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.09)"}
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label style={{
                                        display: "block", fontSize: "12px", color: "#9ca3af",
                                        letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px",
                                        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600
                                    }}>Contraseña</label>
                                    <div style={{ position: "relative" }}>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{
                                                width: "100%", borderRadius: "14px", padding: "16px 52px 16px 18px",
                                                fontSize: "16px", color: "#e2e8f0", outline: "none",
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.09)",
                                                transition: "border-color 0.2s",
                                                fontFamily: "'Barlow', sans-serif"
                                            }}
                                            onFocus={e => e.target.style.borderColor = "rgba(124,106,247,0.6)"}
                                            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.09)"}
                                            placeholder="••••••••"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{
                                                position: "absolute", right: "16px", top: "50%",
                                                transform: "translateY(-50%)", color: "#4b5563",
                                                background: "none", border: "none", cursor: "pointer",
                                                padding: 0, display: "flex", alignItems: "center"
                                            }}
                                        >
                                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                        </button>
                                    </div>
                                </div>

                                {error && (
                                    <div style={{
                                        borderRadius: "12px", padding: "13px 16px",
                                        background: "rgba(239,68,68,0.08)",
                                        border: "1px solid rgba(239,68,68,0.2)"
                                    }}>
                                        <p style={{ color: "#f87171", fontSize: "15px", margin: 0, fontWeight: 500 }}>{error}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    style={{
                                        width: "100%", padding: "18px", borderRadius: "14px", border: "none",
                                        color: "#fff", fontWeight: 700, fontSize: "15px", letterSpacing: "4px",
                                        cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.5 : 1,
                                        background: "linear-gradient(135deg, #7c6af7 0%, #5a48d4 100%)",
                                        transition: "all 0.2s", marginTop: "6px",
                                        fontFamily: "'Barlow Condensed', sans-serif"
                                    }}
                                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "linear-gradient(135deg, #9080ff 0%, #7c6af7 100%)" }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "linear-gradient(135deg, #7c6af7 0%, #5a48d4 100%)" }}
                                >
                                    {loading ? "ENTRANDO..." : "INICIAR SESIÓN"}
                                </button>

                                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                    <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
                                    <span style={{ color: "#374151", fontSize: "14px" }}>¿nuevo aquí?</span>
                                    <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
                                </div>

                                <Link
                                    to="/register"
                                    style={{
                                        display: "block", width: "100%", textAlign: "center",
                                        color: "#6b7280", fontWeight: 700, fontSize: "14px",
                                        letterSpacing: "3px", padding: "16px", borderRadius: "14px",
                                        border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none",
                                        transition: "all 0.2s",
                                        fontFamily: "'Barlow Condensed', sans-serif"
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,106,247,0.4)"; e.currentTarget.style.color = "#fff" }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#6b7280" }}
                                >
                                    CREAR CUENTA GRATIS
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}