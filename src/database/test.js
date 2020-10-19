const Database = require('./db');

Database.then(async db => {
    //  Inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about, 
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-23.9624403",
            "-46.3399801",
            "Lar das Meninas",
            "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
            "9465833165",
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
            "Vista-se confortavelmente e traga muito amor para compartilhar.",
            "Horário de visitas Das 18h até às 8h",
            "1"
            );
    `)
    // Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})

