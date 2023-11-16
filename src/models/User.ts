import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  post,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<UserClass>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})
@post<UserClass[]>(/^find/, function (docs) {
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
    collection: "users", 
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ username: 1 })
class UserClass {
  @prop({ required: true, unique: true })
  username: string;

  @prop({ required: true })
  password: string;

  @prop({ default: "" })
  email: string;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const User = getModelForClass(UserClass);
export { User, UserClass };
