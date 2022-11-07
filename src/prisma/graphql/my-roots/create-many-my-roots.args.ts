import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsCreateManyInput } from './my-roots-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMyRootsArgs {

    @Field(() => [MyRootsCreateManyInput], {nullable:false})
    @Type(() => MyRootsCreateManyInput)
    data!: Array<MyRootsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
