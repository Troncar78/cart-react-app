function MyInput({text, value, onChange}){
    return <input type="text" id="name" name="name" required placeholder={text} value={value} onChange={onChange}/>
}

export default MyInput