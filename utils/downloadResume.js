export default function downloadResume() {
  fetch("/assets/pbresume.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);

      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Pratik Bhangire Resume.pdf";
      alink.click();
    });
  });
}
