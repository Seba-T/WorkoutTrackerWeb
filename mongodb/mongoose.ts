import { Model, Mongoose } from "mongoose";

type Measurement = { date: Date; value: number };

export default class MongodbUtils {
  public Ready: Promise<boolean>;
  private __mongoose: Mongoose;
  private __ExerciseData: Model<any>;
  private __StrikeRecord: Model<any>;
  constructor(mongoUrl: string) {
    this.__mongoose = new Mongoose();
    const mongoMeasurement = new this.__mongoose.Schema({
      date: Date,
      value: Number,
    });
    const strikeRecord = new this.__mongoose.Schema({
      strikeDate: { type: Date, required: true },
    });
    const exerciseData = new this.__mongoose.Schema({
      page__id: { type: String, required: true },
      description: { type: String, required: true },
      measurements: { type: [mongoMeasurement], required: true },
      lastUpdatedDate: { type: Date, required: true },
    });
    this.__StrikeRecord = this.__mongoose.model("StrikeRecord", strikeRecord);
    this.__ExerciseData = this.__mongoose.model("ExerciseData", exerciseData);
    this.Ready = new Promise(async (resolve, reject) => {
      try {
        await this.__mongoose.connect(mongoUrl, {
          dbName: "Prod",
        });
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }
  /**
   * getExercises
   */
  public async getExerciseList() {
    return this.__ExerciseData
      .find()
      .exec()
      .then(
        (doc) => {
          if (doc !== undefined) {
            return doc.map((el) => {
              return { desc: el.description, id: el._id };
            });
          } else return undefined;
        },
        (rej) => rej
      );
  }
  /**
   * getAllRecords
   */
  public getAllRecords() {
    return this.__ExerciseData
      .find()
      .exec()
      .then(
        (doc) => {
          if (doc !== undefined) return doc;
        },
        (rej) => rej
      );
  }
  /**
   * getSingleRecord
   */
  public getSingleRecord(_id: string) {
    return this.__ExerciseData
      .findOne({ _id })
      .exec()
      .then(
        (doc) => {
          if (doc !== undefined) return doc.measurements;
        },
        (rej) => rej
      );
  }
  public getStrikeRecord() {
    return this.__StrikeRecord
      .find()
      .exec()
      .then(
        (doc) => {
          if (doc !== undefined) return doc;
          else return undefined;
        },
        (rej) => rej
      );
  }
}
