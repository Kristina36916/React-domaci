import React from 'react'

function Kontakt() {
  return (<>
    <div className="polje">
    <label>Ime</label>
    <input type="text" name="ime" id="ime" placeholder="Unesite ime"/>
</div>
<div className="polje">
    <label>Prezime</label>
    <input type="text" name="prezime" id="prezime" placeholder="Unesite prezime"/>
</div>
<div className="polje">
    <label>Telefon</label>
    <input type="text" name="telefon" id="telefon" placeholder="Unesite telefon"/>
</div>
<div className="polje">
    <label>Email</label>
    <input type="text" name="email" id="email" placeholder="Unesite email"/>
</div>
<div className="polje">
    <label>Datum</label>
    <input type="date" name="datum" id="datum" />
</div>
<div class="polje">
            <button type="submit" name="submit" class="btn">Potvrdi</button>
        </div>
</>
  )
}

export default Kontakt;