const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
   //  Inserir dados na tabela
    await saveOrphanage(db,{
        lat:"-23.9624403",
        lng:"-46.3699801",
        name: "Lar das Meninas",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9659823546",
        images: [
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
            "https://images.unsplash.com/photo-1565843248736-8c41e6db117b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", 
            "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
            "https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        ].toString(),
        instructions:"Vista-se confortavelmente e traga muito amor para compartilhar.",
        opening_hours:"Horário de visitas Das 18h até às 8h",
        open_on_weekends:"1"
    })

    // Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consultar somente 1 orfanato pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)

    // Deletar dado da tabela
    //await db.run("DELETE FROM orphanages WHERE id = '8'")
    //await db.run("DELETE FROM orphanages WHERE id = '9'") 
})

