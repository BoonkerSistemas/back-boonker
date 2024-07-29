import { Injectable } from '@nestjs/common';
import { CreatePayphoneDto } from './dto/create-payphone.dto';
import { UpdatePayphoneDto } from './dto/update-payphone.dto';
import axios from 'axios';

@Injectable()
export class PayphoneService {
  create(createPayphoneDto: CreatePayphoneDto) {
    return 'This action adds a new payphone';
  }

  findAll() {
    return `This action returns all payphone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payphone`;
  }

  update(id: number, updatePayphoneDto: UpdatePayphoneDto) {
    return `This action updates a #${id} payphone`;
  }

  remove(id: number) {
    return `This action removes a #${id} payphone`;
  }

  async pagarPayphone( dataUrl: any) {

    console.log('aquii');


    let data = JSON.stringify({
      'responseUrl': dataUrl.responseUrl,
      'amount': dataUrl.amount,
      'amountWithoutTax': dataUrl.amountWithoutTax,
      'clientTransactionId': new Date().getTime().toString(),
    });

    console.log(data)

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://pay.payphonetodoesposible.com/api/button/Prepare',
      headers: {
        'Authorization': 'Bearer e3KCtqwjcchjTx0OdIFKiwGCH9bEIpUnQfp8kvlD6vqeABD7x0jr9U31ktAJlc0_hMPExAm8yFjLHIenROq0vECP798oipnCI10lPu_h6H4W_hDTmWmqqG1CjHvnG0JWtvXWwF58Js9fmIU3jrufF1-PsLeAl16Twj2vHGRhEVziQr_f8duktzQxIpSv7kzNaYRRTX0utJ_RzCduAh3KKScD8n9ncI16Y5nqjZOQonIaMs0NqgbvGuFBxT3Rlx2AKs2iJ4HK_gY0-PxMf8_qLojmbMN7chiDOsDMRT9LTaA5kaUajc8f9BwUzk6gsHxnbuSrtfe27X_xgmiYQyrxtk09KC8',
        'Content-Type': 'application/json',
        'Cookie': 'ARRAffinity=296a7c2c3c414f86b8dcb782783202274992bf377a692cdeedcfcb7fbabd85f2; ARRAffinitySameSite=296a7c2c3c414f86b8dcb782783202274992bf377a692cdeedcfcb7fbabd85f2',
      },
      data: data,
    };


    return  axios.request(config)
      .then((response) => {
      //  console.log(JSON.stringify(response.data));
        return  response.data;
      })
      .catch((error) => {
       // console.log(error);
        return error;

      });


  }


  async aprobarPagoPayphone( dataUrl: any) {

    console.log('aquii');


    let data = JSON.stringify({
      "id": dataUrl.id,
      "clientTxId": dataUrl.clientTxId

    });

    console.log(data)

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://pay.payphonetodoesposible.com/api/button/V2/Confirm',
      headers: {
        'Authorization': 'Bearer e3KCtqwjcchjTx0OdIFKiwGCH9bEIpUnQfp8kvlD6vqeABD7x0jr9U31ktAJlc0_hMPExAm8yFjLHIenROq0vECP798oipnCI10lPu_h6H4W_hDTmWmqqG1CjHvnG0JWtvXWwF58Js9fmIU3jrufF1-PsLeAl16Twj2vHGRhEVziQr_f8duktzQxIpSv7kzNaYRRTX0utJ_RzCduAh3KKScD8n9ncI16Y5nqjZOQonIaMs0NqgbvGuFBxT3Rlx2AKs2iJ4HK_gY0-PxMf8_qLojmbMN7chiDOsDMRT9LTaA5kaUajc8f9BwUzk6gsHxnbuSrtfe27X_xgmiYQyrxtk09KC8',
        'Content-Type': 'application/json',
        'Cookie': 'ARRAffinity=296a7c2c3c414f86b8dcb782783202274992bf377a692cdeedcfcb7fbabd85f2; ARRAffinitySameSite=296a7c2c3c414f86b8dcb782783202274992bf377a692cdeedcfcb7fbabd85f2',
      },
      data: data,
    };


    return  axios.request(config)
      .then((response) => {
        //  console.log(JSON.stringify(response.data));
        return  response.data;
      })
      .catch((error) => {
        // console.log(error);
        return error;

      });


  }
}
