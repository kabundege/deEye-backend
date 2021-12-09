// window.onload = function(){
    const input = document.getElementById("files");
    const name = document.getElementById("name");
    const form = document.getElementById("form");

    form.addEventListener("submit", submitForm);
    
    function submitForm(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",name.value)
        formData.append("phone_number","0784824295")
        formData.append("nationality","Rwandan")
        formData.append("complexion","light skin")
        formData.append("age","22")
        formData.append("location","Kigali/kicukiro")
        formData.append("gender","male")
        formData.append("type","found")

        for(let i =0; i < input.files.length; i++) {
            formData.append("image", input.files[i]);
        }

        fetch("http://localhost:2000/posts", {
            method: 'post',
            headers:{
                "phone_number":"250784824295", 
            },
            body: formData
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
    
    }