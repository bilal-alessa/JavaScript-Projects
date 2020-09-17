function GetDictionary() {
    var Computer = { // Assign the dictionary a variable.
        Style: "Laptop", // each index needs a key attached to its value
        Cpu: "I9",
        Ram_size: 64,
        Gpu: "Nvidia RTX 3090",
        Display: "IPS 4k 15\"",
        Gpu_Sli: "Nvidia RTX 3090v2" // Added a dummy line to delete it with delete operator
    };
    delete Computer.Gpu_Sli; // allows to delete an entry in a dictionary
    document.getElementById("Dictionary").innerHTML = Computer.Gpu_Sli; //Returns value based on id
    }