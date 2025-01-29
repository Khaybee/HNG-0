import { Request, Response } from "express";
import { IInfoResponse } from "./types";

export const getInfo = (
    req: Request,
    res: Response
) => {
    try {

        const currentDate = new Date().toISOString();

        const info: IInfoResponse = {
            email: "kachieosuji11@gmail.com",
            current_datetime: currentDate,
            github_url: "https://github.com/Khaybee/HNG-0"
          }

        res.status(200).json(info);
    } catch (error: any) {
        res.status(500).json({
            statusCode: 500,
            status: "error",
            success: false,
            message: "An unexpected error occurred",
            error: error ? error.message : undefined,
          });
    }
}