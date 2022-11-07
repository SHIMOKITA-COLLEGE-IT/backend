import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsCreateManyRootsInput } from './my-roots-create-many-roots.input';
import { Type } from 'class-transformer';

@InputType()
export class MyRootsCreateManyRootsInputEnvelope {

    @Field(() => [MyRootsCreateManyRootsInput], {nullable:false})
    @Type(() => MyRootsCreateManyRootsInput)
    data!: Array<MyRootsCreateManyRootsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
