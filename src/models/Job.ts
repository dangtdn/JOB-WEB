import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  post,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<JobClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})
@post<JobClass[]>(/^find/, function (docs) {
  // @ts-ignore
  if (this.op === "find") {
    docs.forEach((doc) => {
      doc.id = doc._id.toString();
      doc._id = doc.id;
    });
  }
})
@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "jobs",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ name: 1 })
class JobClass {
  @prop({ required: true, default: "" })
  name: string;

  @prop({ required: true, default: "" })
  location: string;

  @prop({ required: true, default: "" })
  type: string;

  @prop({ required: true, default: "" })
  description: string;

  @prop({ required: true, default: false })
  applied: boolean;

  @prop({ required: true, default: [] })
  skills: string[];

  @prop({ required: true, default: "" })
  salary: string;

  @prop({ required: true, default: "" })
  deadline: Date;

  @prop({ required: true, default: "" })
  jobPosted: Date;

  @prop({ required: true, default: "" })
  logoImg: string;

  @prop({ required: true, default: false })
  followed: boolean;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const Job = getModelForClass(JobClass);
export { Job, JobClass };
