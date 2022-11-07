import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereInput } from './club-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyClubArgs {

    @Field(() => ClubWhereInput, {nullable:true})
    @Type(() => ClubWhereInput)
    where?: ClubWhereInput;
}
