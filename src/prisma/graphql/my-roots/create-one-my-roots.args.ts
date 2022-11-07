import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsCreateInput } from './my-roots-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMyRootsArgs {

    @Field(() => MyRootsCreateInput, {nullable:false})
    @Type(() => MyRootsCreateInput)
    data!: MyRootsCreateInput;
}
