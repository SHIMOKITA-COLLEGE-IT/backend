import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoCreateManyInput } from './co-co-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCoCoArgs {

    @Field(() => [CoCoCreateManyInput], {nullable:false})
    @Type(() => CoCoCreateManyInput)
    data!: Array<CoCoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
