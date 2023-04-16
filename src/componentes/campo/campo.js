import './campo.css'

const Campo = ({type = 'text', trataCampoAlterado, label, valor, placeholder, obrigatorio =false }) => {

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={evento => trataCampoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}
export default Campo;