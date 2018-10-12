import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../Service/grabit.service';
declare let require:any;
var Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.css']
})
export class CreateAuctionComponent implements OnInit {
  filepath;
  selectedFile: File = null;
  fd = new FormData();

  constructor (private grab:GrabitService) {
     console.log("called")
  
  }

  // onFileChanged(event) {
  //   const file = event.target.files[0];

    
  //   // this.selectedFile = <File>event.target.files[0];
  //   // this.fd.append('file', this.selectedFile, this.selectedFile.name);
  //   // console.log(this.selectedFile);  
    
  //          var FR= new FileReader();
  //          FR.onload = function(e) {
               
  //               console.log(e.target.result);
  //          };       
  //   return ;
  //   let data:any={}
  //   data['imgbuf']=this.fd;
  //   this.grab.upload(this.fd)
    
  //   return 0;
  //   let file_path:any=((document.getElementById('fileInput')as HTMLInputElement).value);
  //   (document.getElementById('display_name')as HTMLInputElement).value=file_path;
  //   return;
  //   this.filepath=file_path;
  //   let product={};
  //   product['product_name']=file.name;
  //   product['product_image']=file;
  //   this.grab.send_image(file_path).subscribe(
  //     res => {
  //       alert(res)
  //     },
  //     err=>{
  //         console.log(err);
  //         alert(err)   
  //     })
  //   // this.http is the injected HttpClient
  // }

  // upload() {
  //   this.http.post(url, this.fd)
  //   .subscribe( result => {
  //     console.log(result)
  //   });
  // }
  

//   onUpload()
//   {
//    let result =((document.getElementById('display_name')as HTMLInputElement).value);
// console.log(result);
// let path:any={}
// path['path_name']=result;
// this.grab.send_image(path).subscribe(
//   res => {
//     alert(res)
//   },
//   err=>{
//       console.log(err);
//       alert(err)   
//   })

//   }



  openFile(event,_productname){
    console.log(event);
    
    console.log(_productname);
    var ins=this;
      
    ins.selectedFile = <File>event.target.files[0];
    
    let temp:any={};
    temp['imgbuf']=ins.fd.append('file', ins.selectedFile, ins.selectedFile.name);
      ins.grab.upload(ins.fd,_productname)
      
       // output.src = dataURL;
    };
    // reader.readAsDataURL(input.files[0]);



// openFile(event){        //Currently Working
//   var input = event.target;
//   console.log(input.files[0].name);
  

//   var reader = new FileReader();
//   var ins=this;
//   reader.onload = function(){
//   const buf =  Buffer(reader.result);
//   console.log(buf)
  
    
//   ins.selectedFile = <File>event.target.files[0];
  
//   let temp:any={};
//   temp['imgbuf']=ins.fd.append('file', ins.selectedFile, ins.selectedFile.name);;
//   temp['productname']='shanthosh'
//     ins.grab.upload((ins.fd))
    
//     // output.src = dataURL;
//   };
//   reader.readAsDataURL(input.files[0]);
// }
  ngOnInit() {
  }

}
