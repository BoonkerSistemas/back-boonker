import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
export type StartEmployeeDocument = StartEmployee & Document;
@Schema({
  timestamps: true,
  collection: "star-employee"
})



export class StartEmployee {

  @Prop({  })
  startDay: string

  @Prop({   })
  hourStart: string

  @Prop({ })
  finishDay: Date

  @Prop({  })
  hourFinish: Date

  @Prop({   })
  employee: string

  @Prop({  required: true })
  employeeId: string
  @Prop({  })
  hour: string




  @Prop({nullable: true})
  createdAt: string;

  @Prop({nullable: true})
  updatedAt: string;

  @Prop({required: false, nullable: true})
  modifiedUserId: string;

  @Prop({required: false, nullable: true})
  deleteAt: string;


}
export const StartEmployeeSchema = SchemaFactory.createForClass(StartEmployee);

