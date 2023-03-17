console.log("Welcome to the GitHub as a Data Store");

Data = {
	images: [
		"Screenshot (641).png",
		"Screenshot (642).png",
		"Screenshot (644).png",
		"Screenshot (646).png",
		"Screenshot (647).png",
		"Screenshot (648).png",
		"Screenshot (649).png",
	],
	compressed: ["lorem.zip", "lorem2.zip", "lorem3.zip"],
	csv: ["lorem.csv", "lorem2.csv", "lorem3.csv"],
	json: ["lorem.json", "lorem2.json", "lorem3.json"],
	pdf: ["lorem.pdf", "lorem2.pdf", "lorem3.pdf"],
	audio: ["audio1.mp3", "audio2.mp3", "audio3.mp3"],
	video: ["video1.mp4", "video2.mp4", "video3.mp4"],
};

let Images_Data = "";
if (Data.images.length == 0) {
	Images_Data += `    <div class="noDataCard">
    <h1>Sorry No Data is available</h1>
    <h2>o(一︿一+)o</h2>
</div>`;
} else {
	Data.images.forEach((element) => {
		Images_Data += `
        <div class="dataContent">
        <img src="./Data/Images/${element}"
            alt="image1">
            <h1>${element}</h1>
        <div class="options">
            <button class="download"><a href="./Data/Images/${element}" download>Download</a></button>
            <button class="view" disabled style="background: rgba(0, 255, 255, 0.342);box-shadow: none;"
                title="This option is disabled">Get Link</button>
        </div>
    </div>
    `;
	});
}

document.getElementById("images").innerHTML = Images_Data;

let JSON_Data = "";
if (Data.json.length == 0) {
	JSON_Data += `    <div class="noDataCard">
    <h1>Sorry No Data is available</h1>
    <h2>o(一︿一+)o</h2>
</div>`;
} else {
	Data.json.forEach((element) => {
		JSON_Data += `
    <div class="dataContent">
        <img src="https://img.freepik.com/premium-vector/modern-flat-design-json-file-icon-web-simple-style_599062-468.jpg?w=2000"
            alt="image1">
            <h1>${element}</h1>
        <div class="options">
            <button class="download"><a href="./Data/JSON/${element}" download>Download</a></button>
            <button class="view" disabled style="background: rgba(0, 255, 255, 0.342);box-shadow: none;"
                title="This option is disabled">Get Link</button>
        </div>
    </div>
    `;
	});
}

document.getElementById("json").innerHTML = JSON_Data;
let CSV_Data = "";
if (Data.csv.length == 0) {
	CSV_Data += `    <div class="noDataCard">
    <h1>Sorry No Data is available</h1>
    <h2>o(一︿一+)o</h2>
</div>`;
} else {
	Data.csv.forEach((element) => {
		CSV_Data += `
    <div class="dataContent">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkSJxqS7PivRu82GVcYNE-FQ_2D6I-Y-Cs6vOAyF7_RbA62vCXP3qCfx1nIPs6E0MDKY&usqp=CAU"
            alt="image1">
            <h1>${element}</h1>
        <div class="options">
            <button class="download"><a href="./Data/CSV/${element}" download>Download</a></button>
            <button class="view" disabled style="background: rgba(0, 255, 255, 0.342);box-shadow: none;"
                title="This option is disabled">Get Link</button>
        </div>
    </div>
    `;
	});
}
document.getElementById("csv").innerHTML = CSV_Data;

let ZIP_Data = "";
if (Data.compressed.length == 0) {
	ZIP_Data += `    <div class="noDataCard">
    <h1>Sorry No Data is available</h1>
    <h2>o(一︿一+)o</h2>
</div>`;
} else {
	Data.compressed.forEach((element) => {
		ZIP_Data += `
    <div class="dataContent">
        <img src="https://www.cedarville.edu/images/default-source/insights/zip-file-icon.jpg?sfvrsn=d34468_0"
            alt="image1">
            <h1>${element}</h1>
        <div class="options">
            <button class="download"><a href="./Data/ZIP/${element}" download>Download</a></button>
            <button class="view" disabled style="background: rgba(0, 255, 255, 0.342);box-shadow: none;"
                title="This option is disabled">Get Link</button>
        </div>
    </div>
    `;
	});
}
document.getElementById("zip").innerHTML = ZIP_Data;

let PDF_Data = "";
if (Data.compressed.length == 0) {
	PDF_Data += `    <div class="noDataCard">
    <h1>Sorry No Data is available</h1>
    <h2>o(一︿一+)o</h2>
</div>`;
} else {
	Data.compressed.forEach((element) => {
		PDF_Data += `
    <div class="dataContent">
        <img src="https://www.cedarville.edu/images/default-source/insights/zip-file-icon.jpg?sfvrsn=d34468_0"
            alt="image1">
            <h1>${element}</h1>
        <div class="options">
            <button class="download"><a href="./Data/PDF/${element}" download>Download</a></button>
            <button class="view" disabled style="background: rgba(0, 255, 255, 0.342);box-shadow: none;"
                title="This option is disabled">Get Link</button>
        </div>
    </div>
    `;
	});
}
document.getElementById("zip").innerHTML = PDF_Data;

let Audio_Data = "";
if (Data.audio.length == 0) {
	Audio_Data += `    <div class="noDataCard">
    <h1>Sorry No Data is available</h1>
    <h2>o(一︿一+)o</h2>
</div>`;
} else {
	Data.audio.forEach((element) => {
		Audio_Data += `
    <div class="dataContent">
        <img src="https://img.freepik.com/free-icon/volume-up-interface-symbol_318-42211.jpg"
            alt="image1">
            <h1>${element}</h1>
        <div class="options">
            <button class="download"><a href="./Data/Audio/${element}" download>Download</a></button>
            <button class="view" disabled style="background: rgba(0, 255, 255, 0.342);box-shadow: none;"
                title="This option is disabled">Get Link</button>
        </div>
    </div>
    `;
	});
}
document.getElementById("audio").innerHTML = Audio_Data;

let Video_Data = "";
if (Data.video.length == 0) {
	Video_Data += `    <div class="noDataCard">
    <h1>Sorry No Data is available</h1>
    <h2>o(一︿一+)o</h2>
</div>`;
} else {
	Data.video.forEach((element) => {
		Video_Data += `
    <div class="dataContent">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDaXRXanEwadd8KppEeX7tQIZsv8hBt2qcSfM5_ar-Zut5vMlHCPgr6jbybOaGqP488k&usqp=CAU"
            alt="image1">
            <h1>${element}</h1>
        <div class="options">
            <button class="download"><a href="./Data/Video/${element}" download>Download</a></button>
            <button class="view" disabled style="background: rgba(0, 255, 255, 0.342);box-shadow: none;"
                title="This option is disabled">Get Link</button>
        </div>
    </div>
    `;
	});
}
document.getElementById("video").innerHTML = Video_Data;
