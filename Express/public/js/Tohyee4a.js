$("#input").change(() => {
  var selectedFile = document.getElementById("input").files[0];
  handleFile(selectedFile);
});

function fixdata(data) {
  var o = "", l = 0, w = 10240;
  for (; l < data.byteLength / w; ++l)
    o += String.fromCharCode.apply(
      null,
      new Uint8Array(data.slice(l * w, l * w + w))
    );
  o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
  return o;
}

function handleFile(file) {
  var reader = new FileReader();

  reader.onload = event => {
    var data = event.target.result;
    var workbook;
    var arr = fixdata(data);
    workbook = XLSX.read(btoa(arr), {
      type: "base64"
    });

    var result = {};
    workbook.SheetNames.forEach(sheetName => {
      var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      if (roa.length) result[sheetName] = roa;
    });

    var dataSet = result[workbook.SheetNames[0]];
    var columnDefs = [
      { title: "Name", targets: 0, visible: true },
      { title: "Position", targets: 1, visible: true },
      { title: "Office", targets: 2, visible: true },
      { title: "Extn.", targets: 3, visible: true },
      { title: "Start date", targets: 4, visible: true },
      { title: "Salary", targets: 5, visible: true }
    ];

    $("#example").DataTable({
      columnDefs: columnDefs,
      data: dataSet,
      columns: [
        { data: "name" },
        { data: "position" },
        { data: "office" },
        { data: "extn" },
        { data: "start_date" },
        { data: "salary" }
      ]
    });
  };

  if (file) { reader.readAsArrayBuffer(file); }
}
