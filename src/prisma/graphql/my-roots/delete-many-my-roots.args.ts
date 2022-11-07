import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsWhereInput } from './my-roots-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMyRootsArgs {

    @Field(() => MyRootsWhereInput, {nullable:true})
    @Type(() => MyRootsWhereInput)
    where?: MyRootsWhereInput;
}
