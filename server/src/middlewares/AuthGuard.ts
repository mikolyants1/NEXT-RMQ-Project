import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Request } from "express";
import { Model } from "mongoose";
import { AuthService } from "src/auth/auth.service";
import { Users } from "src/database/user.mongo";
import { UsersDto } from "src/dto/users.dto";

export class AuthGuard implements CanActivate {
    constructor(
     @InjectModel(Users.name) private readonly Base:Model<Users>,
     private readonly authService:AuthService
    ){};
    
   async canActivate(context: ExecutionContext):Promise<boolean> {
    try {
      const req:Request = context.switchToHttp().getRequest();
      const token:string = await this.authService.getToken(req);
      const user:UsersDto = await this.Base.findById(req.query.userId);
      if (!token) throw new UnauthorizedException('Bearer not found');
      return await this.authService.compare(token,user);
    } catch (e) {
       throw new UnauthorizedException(e);
    };
   };
};