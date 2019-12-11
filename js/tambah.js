var selectedRow = null
var i = 1;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["nis"] = document.getElementById("nis").value;
    formData["pass"] = document.getElementById("pass").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("table1list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = i++;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nama;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nis;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pass;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Ubah</a>
                       <a onClick="onDelete(this)">Hapus</a>`;
}

function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("nis").value = "";
    document.getElementById("pass").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nis").value = selectedRow.cells[2].innerHTML;
    document.getElementById("pass").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.nama;
    selectedRow.cells[2].innerHTML = formData.nis;
    selectedRow.cells[3].innerHTML = formData.pass;
}

function onDelete(td) {
    if (confirm('Apakah anda yakin akan menghapus data ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table1list").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("nama", "nis", "pass").value == "") {
        isValid = false;
        document.getElementById("namaValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("namaValidationError").classList.contains("hide"))
            document.getElementById("namaValidationError").classList.add("hide");
    }
    return isValid;
}