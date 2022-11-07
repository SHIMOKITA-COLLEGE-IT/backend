import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeCreateManyInput } from './home-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHomeArgs {

    @Field(() => [HomeCreateManyInput], {nullable:false})
    @Type(() => HomeCreateManyInput)
    data!: Array<HomeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
