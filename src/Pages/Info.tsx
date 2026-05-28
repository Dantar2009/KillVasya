import { memo } from "react";

const Info = memo(() => {
    return (
        <main style={{
            maxWidth: 600,
            margin: "0 auto",
            padding: "32px 24px",
            color: "#e0e0e0",
            fontSize: 15,
            lineHeight: 1.7,
        }}>
            {/* Как играть */}
            <section>
                <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 16px", color: "#fff",textAlign:"center" }}>
                    📖 Как играть
                </h2>

                <p style={{ margin: "0 0 12px" }}>
                    <strong style={{ color: "#fff" }}>Убей Васю</strong> — это браузерная ролевая игра на двоих в реальном времени.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "16px 0 6px" }}>
                    🚀 Как начать
                </h3>
                <p style={{ margin: "0 0 12px" }}>
                    Зарегистрируйся или войди. На главном экране нажми <strong style={{ color: "#fff" }}>«Создать»</strong>,
                    выбери роль (киллер или телохранитель) — и комната появится в списке.
                    Отправь ссылку другу или жди, пока кто-то зайдёт. Когда оба игрока в комнате — игра начинается.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "16px 0 6px" }}>
                    🔪 Киллер
                </h3>
                <p style={{ margin: "0 0 12px" }}>
                    Придумывает и описывает способ убийства Васи. Чем изобретательнее — тем выше шанс на победу.
                    Киллер всегда пишет первым.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "16px 0 6px" }}>
                    🛡️ Телохранитель
                </h3>
                <p style={{ margin: "0 0 12px" }}>
                    Отвечает на ход киллера и объясняет, почему Вася выжил. Находит уязвимости в плане убийцы.
                    Пишет вторым, после киллера.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "16px 0 6px" }}>
                    🤖 AI-судья
                </h3>
                <p style={{ margin: "0 0 12px" }}>
                    Нейросеть анализирует аргументы обоих игроков и выносит вердикт: выжил Вася или умер.
                    Решение основано на логике, убедительности и креативности.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "16px 0 6px" }}>
                    🪦 Кладбище Вась
                </h3>
                <p style={{ margin: "0 0 12px" }}>
                    Если киллер победил — Вася умирает, и AI сочиняет эпитафию. Она навсегда попадает на кладбище.
                    Там хранятся все смерти за историю игры. Просмотр доступен на главном экране — кнопка «Кладбище».
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "16px 0 6px" }}>
                    🏆 Рейтинг
                </h3>
                <p style={{ margin: 0 }}>
                    Используется система ELO. Победил — рейтинг растёт. Проиграл — падает.
                    Вышел из комнаты во время игры — автоматическое поражение. Топ игроков обновляется в реальном времени
                    и доступен на главном экране по кнопке «Рейтинг».
                </p>
            </section>

            <hr style={{
                border: "none",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                margin: "32px 0",
            }} />

            {/* Кто создал */}
            <section>
                <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 16px", color: "#fff",textAlign:"center" }}>
                    👤 Кто создал
                </h2>

                <p style={{ margin: "0 0 12px" }}>
                    Игру сделал <strong style={{ color: "#fff" }}>Dantar2009</strong> — fullstack-разработчик, 16 лет.
                    Проект собран за месяц в качестве пет-проекта для портфолио.
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "16px 0 6px" }}>
                    🛠️ Стек
                </h3>
                <p style={{ margin: "0 0 12px" }}>
                    React, TypeScript, Node.js, Express, Socket.IO, PostgreSQL (Supabase), OpenRouter API, VK Bot API.
                    Фронтенд на Vercel, бэкенд на Render, база на Supabase.
                </p>

                <div style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
                    <a href="https://github.com/Dantar2009" target="_blank" rel="noopener" style={{
                        color: "#a8b2ff",
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: 500,
                    }}>
                        GitHub
                    </a>
                    <a href="https://github.com/Dantar2009/KillVasya" target="_blank" rel="noopener" style={{
                        color: "#a8b2ff",
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: 500,
                    }}>
                        Репозиторий игры
                    </a>
                    
                </div>
            </section>
        </main>
    );
});

export default Info;