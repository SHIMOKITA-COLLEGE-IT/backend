import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsCreateManyInput } from './roots-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRootsArgs {

    @Field(() => [RootsCreateManyInput], {nullable:false})
    @Type(() => RootsCreateManyInput)
    data!: Array<RootsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
