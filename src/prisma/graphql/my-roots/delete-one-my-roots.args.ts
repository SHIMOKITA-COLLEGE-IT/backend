import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMyRootsArgs {

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;
}
